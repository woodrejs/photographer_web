import React, { useState } from "react";
import styled from "styled-components";

export default function SocialButton({ url, title }) {
  //hooks
  const [isActive, setIsActive] = useState(true);

  //handlers
  const handleMouseEnter = () => setIsActive(false);
  const handleMouseLeave = () => setIsActive(true);

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Anchor href={url} $isActive={isActive} children={title} />
      <Line $isActive={isActive} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Anchor = styled.a`
  font-size: 14px;
  line-height: 100%;
  font-weight: bold;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.light : theme.colors.grey};
  text-decoration: none;
  padding-bottom: 2px;
`;
const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.light};

  height: 1px;
  width: 100%;

  transform-origin: left;
  transform: ${({ $isActive }) => `scaleX(${$isActive ? 1 : 0})`};
  transition: 0.3s;
`;
