import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
//utils
import { vars } from "../../../utils/vars";

export default function NavItem({ title, path }) {
  //hooks
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(pathname === path);
  const [isOver, setIsOver] = useState(false);

  //handlers
  const handleMouseEnter = () => !isActive && setIsOver(true);
  const handleMouseLeave = () => !isActive && setIsOver(false);

  useEffect(() => {
    setIsActive(pathname === path);
    setIsOver(false);
  }, [pathname]);

  return (
    <Item onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Anchor to={path} children={title} $color={isActive || isOver} />
      <Line $scale={isActive || isOver} />
    </Item>
  );
}

//styles
const Item = styled.div`
  line-height: 100%;
  padding: 10px 20px;
  cursor: pointer;
  display: none;

  @media ${vars.device.tablet} {
    display: block;
  }
`;
const Anchor = styled(NavLink)`
  font-size: 13px;

  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme, $color }) => ($color ? theme.colors.dark : theme.colors.grey)};
`;
const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  margin-top: 2px;
  height: 2px;
  width: 100%;

  transform-origin: left;
  transform: ${({ $scale }) => `scaleX(${$scale ? 1 : 0})`};
  transition: 0.3s;
`;
