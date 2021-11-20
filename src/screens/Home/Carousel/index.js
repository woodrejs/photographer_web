import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
//components
import AliceCarousel from "react-alice-carousel";
import Slide from "./Slide";
//utils
import { vars } from "../../../utils/vars";
//assets
import scroll_icon from "./scroll_icon.svg";

export default function Carousel({ list }) {
  //hooks
  const ref = useRef(null);

  //effects
  useEffect(() => {
    gsap.to(ref.current, { opacity: 1, ease: "power2", y: -15 });
  }, []);

  if (!list.length) return null;

  return (
    <Container ref={ref}>
      <Box>
        <MaskBox>
          <Mask />
          <Header>Hej! Miło Cię widzieć na mojej stronie</Header>
          <Icon src={scroll_icon} alt="scroll_icon" />
        </MaskBox>
        <AliceCarousel
          mouseTracking
          items={setImages(list)}
          disableButtonsControls
          disableDotsControls
          autoPlay
          infinite
          autoPlayInterval={4000}
        />
      </Box>
    </Container>
  );
}
//functions
function setImages(arr) {
  return arr.map((item) => (
    <Slide url={item.src} placeholder={item.placeholder} key={item.id} />
  ));
}
//styles
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  opacity: 0;
  transform: translateY(15px);
`;
const Box = styled.section`
  max-width: 1366px;
  width: 100%;
  ${vars.shadow}
  position: relative;
  overflow: hidden;
  height: 70vh;
`;
const MaskBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  opacity: 0.4;
`;
const Header = styled.h1`
  position: absolute;

  font-size: 26px;
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  max-width: 70%;

  @media ${vars.device.desktop} {
    font-size: 45px;
    max-width: 70%;
    line-height: 120%;
  }
`;
const Icon = styled.img`
  position: absolute;
  height: 35px;
  margin-top: 250px;
`;
