import React from "react";
import styled from "styled-components";

export default function Badge({ title }) {
  return <Container children={title} />;
}

const Container = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 12px;
  padding: 10px 2px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.dark};

  background-color: rgba(255, 255, 255, 0.45);
  z-index: 100;

  writing-mode: vertical-rl;
  text-orientation: mixed;
`;
