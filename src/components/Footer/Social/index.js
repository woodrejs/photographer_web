import React from "react";
import styled from "styled-components";
//assets
import Logo_dark from "./logo_dark.svg";

export default function Social() {
  return (
    <Container>
      <Box>
        <SocialLink href="https://www.facebook.com/Aga-Podo-Fotografie-102625577997648/">
          facebook
        </SocialLink>
        <Logo src={Logo_dark} />
        <SocialLink href="https://www.instagram.com/agapodo.fotografie/">
          instagram
        </SocialLink>
      </Box>
    </Container>
  );
}
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
`;
const SocialLink = styled.a`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.light};
`;
