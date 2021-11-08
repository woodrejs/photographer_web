import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function ButtonLink({ title, path, className }) {
  //hooks
  const [isActive, setIsActive] = useState(true);

  //handlers
  const handleMouseEnter = () => setIsActive(false);
  const handleMouseLeave = () => setIsActive(true);

  return (
    <Container className={className}>
      <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Button to={path} $isActive={isActive}>
          {title}
        </Button>
        <Line $isActive={isActive} />
      </Box>
    </Container>
  );
}

//styles
const Container = styled.div`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled(NavLink)`
  background-color: transparent;
  text-decoration: none;
  border: none;
  font-size: 28px;
  line-height: 100%;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.dark : theme.colors.grey)};
  margin-bottom: 3px;
`;
const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};

  height: 1px;
  width: 100%;

  transform-origin: left;
  transform: ${({ $isActive }) => `scaleX(${$isActive ? 1 : 0})`};
  transition: 0.3s;
`;
