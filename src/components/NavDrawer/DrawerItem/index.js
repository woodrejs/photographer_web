import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

export default function DrawerItem({ title, path }) {
  //hooks
  const { pathname } = useLocation();
  const [isActive] = useState(pathname === path);
  const [isOver, setIsOver] = useState(false);

  //handlers
  const handleMouseEnter = () => !isActive && setIsOver(true);
  const handleMouseLeave = () => !isActive && setIsOver(false);

  return (
    <Item onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Anchor to={path} children={title} $color={isActive || isOver} />
    </Item>
  );
}

const Item = styled.div`
  padding: 20px 0;
  margin-bottom: 10px;
`;
const Anchor = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme, $color }) => ($color ? theme.colors.light : theme.colors.grey)};
`;
