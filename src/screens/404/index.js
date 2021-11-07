import React from "react";
import styled from "styled-components";
//components
import NavBar from "../../components/NavBar";
import NavDrawer from "../../components/NavDrawer";
import Footer from "../../components/Footer";
import Title from "../../components/Title";

export default function Page404() {
  return (
    <Container>
      <NavBar />
      <NavDrawer />
      <Header title="Page404" subTitle="nie ma takiej strony :(" />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Header = styled(Title)``;
