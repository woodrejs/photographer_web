import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
//components
import DrawerItem from "./DrawerItem";
//utils
import { vars } from "../../utils/vars";

export default function NavDrawer() {
  //hooks
  const { isOpen } = useSelector(({ navSlice }) => navSlice);

  return (
    <Container $isOpen={isOpen}>
      <Box>
        <DrawerItem title="start" path="/" />
        <DrawerItem title="portfolio" path="/portfolio" />
        <DrawerItem title="publikacje" path="/publikacje" />
        <DrawerItem title="o mnie" path="/o_mnie" />

        <Version>v.1.0.0</Version>
      </Box>
    </Container>
  );
}

const Container = styled.section`
  height: 100vh;
  width: 60vw;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0px" : "-60vw")};
  z-index: 100;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.dark};

  @media ${vars.device.tablet} {
    display: none;
  }
`;
const Box = styled.nav`
  width: 100%;
  height: 100%;
  padding: 40px;
  position: relative;
`;
const Version = styled.aside`
  position: absolute;
  bottom: 30px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
`;

