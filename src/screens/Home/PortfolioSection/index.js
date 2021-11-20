import React from "react";
import styled from "styled-components";
//components
import ButtonLink from "../../../components/ButtonLink";
import GridList from "./GridList";
//utils
import { vars } from "../../../utils/vars";

export default React.memo(function PortfolioSection({ list }) {
  if (!list.length) return null;

  return (
    <Container>
      <Box>
        <ButtonLink title="Portfolio" path="/portfolio" />
        <GridList list={list} />
      </Box>
    </Container>
  );
});
//styles
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
  padding: 0 20px;

  @media ${vars.device.tablet} {
    padding: 0;
  }
`;
