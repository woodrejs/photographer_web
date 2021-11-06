import React from "react";
import styled from "styled-components";
//components
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import NavIcon from "./NavIcon";

const Container = styled.section`
  width: 100%;
  height: 15vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Box = styled.nav`
  max-width: 1366px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
`;

export default function NavBar() {
  return (
    <Container>
      <Box>
        <NavItem title="start" path="/" />
        <NavItem title="portfolio" path="/portfolio" />
        <NavLogo />
        <NavItem title="publikacje" path="/publikacje" />
        <NavItem title="o mnie" path="/o_mnie" />
        <NavIcon />
      </Box>
    </Container>
  );
}
