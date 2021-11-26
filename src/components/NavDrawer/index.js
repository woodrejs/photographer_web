import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
//components
import DrawerItem from "./DrawerItem";
//utils
import { vars } from "../../utils/vars";
import { setIsOpen } from "../../redux/nav.slice";

export default React.memo(function NavDrawer() {
  //hooks
  const { isOpen } = useSelector(({ navSlice }) => navSlice);
  const dispatch = useDispatch();

  //handlers
  const handleClick = () => {
    dispatch(setIsOpen(false));
  };

  return (
    <Container $isOpen={isOpen}>
      <Mask onClick={handleClick} $isOpen={isOpen} />
      <Box>
        <DrawerItem title="start" path="/" />
        <DrawerItem title="portfolio" path="/portfolio" />
        <DrawerItem title="publikacje" path="/publications" />
        <DrawerItem title="o mnie" path="/about" />

        <Version>v.1.0.0</Version>
      </Box>
    </Container>
  );
})
//styles
const Container = styled.section`
  order: 2;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 300;
  position: fixed;
  transform: ${({ $isOpen }) => ($isOpen ? `translateX(0vw)` : `translateX(-100vw)`)};
  transition: ${({ $isOpen }) =>
    $isOpen ? `transform 0.3s ease-in-out` : `transform 0.3s ease-in-out 0.2s`};

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
  opacity: ${({ $isOpen }) => ($isOpen ? 0.8 : 0)};
  transition: ${({ $isOpen }) =>
    $isOpen ? `opacity 0.2s ease-in-out 0.2s` : `opacity 0.2s ease-in-out`};
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
