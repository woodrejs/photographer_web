import React from "react";
import styled from "styled-components";
//components
import SocialButton from "./SocialButton";
//assets
import Logo_dark from "../../../assets/logo_light.jpg";

export default React.memo(function Social() {
  return (
    <Container>
      <Box>
        <SocialButton
          title="facebook"
          url="https://www.facebook.com/Aga-Podo-Fotografie-102625577997648/"
        />
        <Logo src={Logo_dark} />
        <SocialButton
          title="instagram"
          url="https://www.instagram.com/agapodo.fotografie/"
        />
      </Box>
    </Container>
  );
})
//styles
const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.section`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  margin: 0 25px;
  height: 60px;
`;
