import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
//assets
import Logo_dark from "./logo_dark.svg";
//utils
import { vars } from "../../../utils/vars";

const Container = styled.figure``;
const Anchor = styled(NavLink)``;
const Image = styled.img`
  height: 45px;

  @media ${vars.device.tablet} {
    height: 55px;
  }
`;

export default function NavLogo() {
  return (
    <Container>
      <Anchor to="/">
        <Image src={Logo_dark} />
      </Anchor>
    </Container>
  );
}
