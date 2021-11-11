import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
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


const routes = [
  {
    key: uuidv4(),
    name: "Start",
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    key: uuidv4(),
    name: "Portfolio",
    path: "/portfolio",
    element: <Portfolio />,
    exact: true,
  },
  {
    key: uuidv4(),
    name: "Publications",
    path: "/publications",
    element: <Publications />,
    exact: true,
  },
  {
    key: uuidv4(),
    name: "Session",
    path: "/sessions/:title",
    element: <Single />,
    exact: true,
  },
  {
    key: uuidv4(),
    name: "Publication",
    path: "publications/:title",
    element: <Single />,
    exact: true,
  },
  {
    key: uuidv4(),
    name: "About",
    path: "/about",
    element: <About />,
    exact: false,
  },
  {
    key: uuidv4(),
    name: "Page404",
    path: "*",
    element: <Page404 />,
    exact: false,
  },
];

export default function App() {
  return (
    <Container>
      <Router>
        <NavBar />
        <NavDrawer />
        <Routes>
          {routes.map(({ path, element, key, exact }) => (
            <Route key={key} path={path} exact={exact} element={element} />
          ))}
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
`;
