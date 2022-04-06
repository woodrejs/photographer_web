import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//screens
import Home from "./screens/Home";
import Publications from "./screens/Publications";
import Portfolio from "./screens/Portfolio";
import Single from "./screens/Single";
import About from "./screens/About";
import Page404 from "./screens/404";
//components
import NavBar from "./components/NavBar";
import NavDrawer from "./components/NavDrawer";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Error from "./components/Error";
//utils
import { getList, getSlides } from "./utils/strapi";
import {
  setImageSrc,
  setImageThumbSrc,
  setLeastImageSrc,
} from "./utils/functions";
import { setError } from "./redux/app.slice";

export default function App() {
  //hooks
  const error = useSelector(({ appSlice }) => appSlice.error);
  const dispatch = useDispatch();
  const [lists, setLists] = useState({
    slides: null,
    publications: null,
    portfolio: null,
  });

  useEffect(() => {
    async function init() {
      try {
        const tmp = { ...lists };

        if (!tmp.portfolio) {
          const resp = await getList("sessions");
          resp.sort((a, b) => new Date(b.date) - new Date(a.date));
          const data = resp.map(({ id, title, date, src }) => ({
            id,
            title,
            date,
            src: setImageThumbSrc(src),
            placeholder: setLeastImageSrc(src),
          }));

          tmp.portfolio = data;
        }

        if (!tmp.publications) {
          const resp = await getList("publications");
          resp.sort((a, b) => new Date(b.date) - new Date(a.date));
          const data = resp.map(({ id, title, date, src }) => ({
            id,
            title,
            date,
            src: setImageThumbSrc(src),
            placeholder: setLeastImageSrc(src),
          }));

          tmp.publications = data;
        }
        if (!tmp.slides) {
          const resp = await getSlides();

          const data = resp.map(({ id, src }) => ({
            id,
            src: setImageSrc(src),
            placeholder: setLeastImageSrc(src),
          }));

          tmp.slides = data;
        }

        if (!lists.portfolio || !lists.publications || !lists.slides) {
          setLists(tmp);
        }
      } catch (error) {
        dispatch(
          setError([
            true,
            "Nie udało się zainicjować aplikacji. Błąd podczas pobierania danych. Spróbuj ponownie.",
          ])
        );
      }
    }

    !error.isOpen && init();
  }, [error, dispatch, lists]);

  if (error.isOpen) return <Error message={error.message} />;

  if (!lists.portfolio || !lists.publications || !lists.slides)
    return <Intro />;

  return (
    <Container>
      <Router>
        <NavBar />
        <NavDrawer />
        <Routes>
          <Route path={"/"} element={<Home lists={lists} />} exact />
          <Route path={"/portfolio"} element={<Portfolio />} exact />
          <Route path={"/publications"} element={<Publications />} exact />
          <Route path={"/sessions/:title"} element={<Single />} exact />
          <Route path={"/publications/:title"} element={<Single />} exact />
          <Route path={"/about"} element={<About />} />
          <Route path={"*"} element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  );
}
//styles
const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.bck};
`;
