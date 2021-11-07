import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function ButtonLink({ title, path, className }) {
  return (
    <Container className={className}>
      <Button to={path}>{title}</Button>
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
const Button = styled(NavLink)`
  text-decoration: underline;
  background-color: transparent;
  border: none;
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.dark};
`;
