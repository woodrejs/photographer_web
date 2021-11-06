import React from "react";
import styled from "styled-components";
//components
import ButtonLink from "../../../components/ButtonLink";
import GridList from "./GridList";

export default function PortfolioSection() {
  return (
    <Container>
      <Box>
        <ButtonLink title="Portfolio" path="/portfolio" />
        <GridList />
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Box = styled.section`
  max-width: 1366px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;
