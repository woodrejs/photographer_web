import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
//assets
import Logo_dark from "../../../assets/logo_dark.png";
//utils
import { vars } from "../../../utils/vars";

export default React.memo(function NavLogo() {
  return (
    <Container>
      <Anchor to="/">
        <Image src={Logo_dark} alt="logo" />
      </Anchor>
    </Container>
  );
});

//styles
const Container = styled.figure``;
const Anchor = styled(NavLink)``;
const Image = styled.img`
  height: 50px;
  width: 100%;

  @media ${vars.device.tablet} {
    height: 55px;
  }
`;
