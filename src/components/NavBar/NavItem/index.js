import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
//utils
import { vars } from "../../../utils/vars";
import { checkIsActive } from "../../../utils/functions";

export default function NavItem({ title, path }) {
  //hooks
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(checkIsActive(pathname, path));
  const [isOver, setIsOver] = useState(false);

  //handlers
  const handleMouseEnter = () => !isActive && setIsOver(true);
  const handleMouseLeave = () => !isActive && setIsOver(false);

  useEffect(() => {
    setIsActive(checkIsActive(pathname, path));
    setIsOver(false);
  }, [pathname, path]);

  return (
    <Item to={path} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Anchor to={path} children={title} $color={isActive || isOver} />
      <Line $scale={isActive || isOver} />
    </Item>
  );
}

//styles
const Item = styled(NavLink)`
  line-height: 100%;
  padding: 10px 20px;
  cursor: pointer;
  display: none;
  text-decoration: none;

  @media ${vars.device.tablet} {
    display: block;
  }
`;
const Anchor = styled.span`
  font-size: 13px;

  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme, $color }) => ($color ? theme.colors.dark : theme.colors.grey)};
`;
const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  margin-top: 2px;
  height: 1px;
  width: 100%;

  transform-origin: left;
  transform: ${({ $scale }) => `scaleX(${$scale ? 1 : 0})`};
  transition: 0.3s;
`;
