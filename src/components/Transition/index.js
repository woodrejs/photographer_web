import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { getDevice } from "../../utils/functions";

export default function Transition() {
  //hooks
  const ref = useRef(null);
  const isMobile = getDevice() === "mobile";

  //effects
  useEffect(() => {
    !isMobile && gsap.to(ref.current, { duration: 0.5, x: -ref.current.clientWidth });
  }, [isMobile]);

  if (isMobile) return null;

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
