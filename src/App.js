import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//screens
import Home from "./screens/Home";

const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export default function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/" component={Page404} />  */}
        </Routes>
      </Router>
    </Container>
  );
}
