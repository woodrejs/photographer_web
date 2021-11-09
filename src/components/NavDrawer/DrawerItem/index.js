import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
//utils
import { checkIsActive } from "../../../utils/functions";
import { setIsOpen } from "../../../redux/nav.slice";

export default function DrawerItem({ title, path }) {
  //hooks
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(checkIsActive(pathname, path));
  const [isOver, setIsOver] = useState(false);
  const dispatch = useDispatch();

  //handlers
  const handleMouseEnter = () => !isActive && setIsOver(true);
  const handleMouseLeave = () => !isActive && setIsOver(false);

  useEffect(() => {
    setIsActive(checkIsActive(pathname, path));
    setIsOver(false);
  }, [pathname]);

  return (
    <Item onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Anchor
        onClick={() => dispatch(setIsOpen(undefined))}
        to={path}
        children={title}
        $color={isActive || isOver}
      />
    </Item>
  );
}
//styles
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
