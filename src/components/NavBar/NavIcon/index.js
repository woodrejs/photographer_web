import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
//assets
import hamburger_icon from "./hamburger_icon.svg";
//utils
import { vars } from "../../../utils/vars";
import { setIsOpen } from "../../../redux/nav.slice";

export default function NavIcon() {
  //hooks
  const dispatch = useDispatch();
  const { isOpen } = useSelector(({ navSlice }) => navSlice);

  //handlers
  const handleClick = () => dispatch(setIsOpen(!isOpen));

  return (
    <Container onClick={handleClick}>
      <Image src={hamburger_icon} />
    </Container>
  );
}

const Container = styled.figure`
  cursor: pointer;
  padding: 20px 0 20px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  display: block;

  z-index: 999999;
  @media ${vars.device.tablet} {
    display: none;
  }
`;
const Image = styled.img``;
