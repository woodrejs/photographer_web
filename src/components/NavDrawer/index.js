import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
//components
import DrawerItem from "./DrawerItem";
//utils
import { vars } from "../../utils/vars";
import { setIsOpen } from "../../redux/nav.slice";

export default function NavDrawer() {
  //hooks
  const { isOpen } = useSelector(({ navSlice }) => navSlice);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(setIsOpen(!isOpen));

  return (
    <Container $isOpen={isOpen}>
      <Mask onClick={handleClick} />
      <Box>
        <DrawerItem title="start" path="/" />
        <DrawerItem title="portfolio" path="/portfolio" />
        <DrawerItem title="publikacje" path="/publications" />
        <DrawerItem title="o mnie" path="/about" />

        <Version>v.1.0.0</Version>
      </Box>
    </Container>
  );
}
//styles
const Container = styled.section`
  height: 100vh;
  width: 100vw;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0px" : "-100vw")};
  z-index: 100;
  position: fixed;

  @media ${vars.device.tablet} {
    display: none;
  }
`;
const Mask = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.dark};
  opacity: 0.5;
`;
const Box = styled.nav`
  width: 60%;
  height: 100%;
  padding: 40px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.dark};
`;
const Version = styled.aside`
  position: absolute;
  bottom: 30px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
`;
