import React, { useEffect, useState } from "react";
import styled from "styled-components";
//components
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import NavIcon from "./NavIcon";
//utils
import { vars } from "../../utils/vars";

export default function NavBar() {
  //hooks
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { innerHeight, pageYOffset } = window;

      if (pageYOffset > innerHeight * 0.8 && isSticky === false) return setIsSticky(true);
      if (pageYOffset <= innerHeight * 0.8 && isSticky === true)
        return setIsSticky(false);
    });
  });

  return (
    <Container>
      <StickyBox $isSticky={isSticky}>
        <Box>
          <NavItem title="start" path="/" />
          <NavItem title="portfolio" path="/portfolio" />
          <NavLogo />
          <NavItem title="publikacje" path="/publications" />
          <NavItem title="o mnie" path="/about" />
          <NavIcon />
        </Box>
      </StickyBox>
    </Container>
  );
}

//styles
const Container = styled.section`
  width: 100%;
  height: 15vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  order: 1;
`;
const StickyBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${({ $isSticky }) => ($isSticky ? "5px 0" : "0")};

  top: 0;
  z-index: 200;
  position: ${({ $isSticky }) => ($isSticky ? "fixed" : "block")};
  background-color: ${({ theme, $isSticky }) =>
    $isSticky ? theme.colors.light : theme.colors.bck};
  position: ${({ $isSticky }) => $isSticky && vars.shadow};
`;
const Box = styled.nav`
  max-width: 1366px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
`;
