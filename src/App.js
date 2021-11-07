import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//screens
import Home from "./screens/Home";
import List from "./screens/List";
import Single from "./screens/Single";
import About from "./screens/About";
import Page404 from "./screens/404";

export default function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/publications" element={<List />} />
          <Route path="/portfolio" element={<List />} />
          <Route path="/session/:title" element={<Single />} />
          <Route path="/publication/:title" element={<Single />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
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
`;
