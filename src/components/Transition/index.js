import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

export default function Transition() {
  //hooks
  const ref = useRef(null);

  //effects
  useEffect(() => {
    gsap.to(ref.current, { duration: 0.5, x: -ref.current.clientWidth });
  });

  return <Container ref={ref} />;
}
const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};

  position: absolute;
  top: 0;
  z-index: 10000;
`;