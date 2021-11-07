import React from "react";
import styled from "styled-components";
//components
import Social from "./Social";
//assets
import copyright_icon from "./copyright_icon.svg";
//utils
import { vars } from "../../utils/vars";

export default function Footer() {
  return (
    <Container>
      <Box>
        <Social />
        <BottomBar>
          <Address>
            <Title>kontakt:</Title>
            <Details>+48531892218</Details>
            <Details>kontakt@gmail.com</Details>
          </Address>
          <Aside>
            <Icon src={copyright_icon} alt="copyright_icon" />
            <Copywriter>Maciej Szczepański</Copywriter>
          </Aside>
        </BottomBar>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: center;
`;
const Box = styled.section`
  height: 25vh;
  width: 100%;
  max-width: 1366px;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
`;
const BottomBar = styled.div`
  min-height: 5vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${vars.device.tablet} {
    flex-direction: row;
  }
`;
const Address = styled.address`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.light};
  font-size: 14px;
`;
const Aside = styled.div`
  display: flex;
  align-items: center;

  padding: 5px 0;

  @media ${vars.device.tablet} {
    padding: 0;
  }
`;
const Icon = styled.img`
  height: 12px;
  margin-right: 10px;
`;
const Copywriter = styled.span`
  color: ${({ theme }) => theme.colors.light};
  font-size: 12px;
`;
const Title = styled.h5`
  text-transform: uppercase;
  margin-right: 10px;
  font-weight: normal;
`;
const Details = styled.span`
  margin-right: 10px;
  font-weight: bold;
`;


