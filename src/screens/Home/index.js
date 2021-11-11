import React from "react";
import styled from "styled-components";
//components
import Carousel from "./Carousel";
import PortfolioSection from "./PortfolioSection";
import PublicationsSection from "./PublicationsSection";
import Transition from "../../components/Transition";
import Loader from "../../components/Loader";

export default function Home({ lists }) {
  if (!lists.portfolio || !lists.publications || !lists.slides) return <Loader />;

  
  return (
    <Container>
      <Transition />
      <Carousel list={lists.slides} />
      <PortfolioSection list={lists.portfolio} />
      <PublicationsSection list={lists.publications} />
    </Container>
  );
}
//styles
const Container = styled.div`
  order: 3;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
`;
