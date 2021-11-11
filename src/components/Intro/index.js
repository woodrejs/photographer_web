import React from "react";
import styled from "styled-components";
//assets
import Logo_dark from "./logo_dark.svg";
//utils
import { vars } from "../../utils/vars";

export default function Intro() {
  return (
    <Container>
      <Logo src={Logo_dark} alt="logo_dark" />
    </Container>
  );
}

const Container = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bck};
  z-index: 100000;
`;

const Logo = styled.img`
  height: 10vh;
  margin-bottom: 50vh;

  @media ${vars.device.tablet} {
    margin-bottom: 0;
  }
`;
