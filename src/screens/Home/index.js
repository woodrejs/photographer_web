import React from "react";
import styled from "styled-components";
//components
import Carousel from "./Carousel";
import PortfolioSection from "./PortfolioSection";
import PublicationsSection from "./PublicationsSection";
import Transition from "../../components/Transition";



export default function Home() {
  return (
    <Container>
      <Transition />
      <Carousel />
      <PortfolioSection />
      <PublicationsSection />
    </Container>
  );
}

const Container = styled.div`
  order: 3;
`;
