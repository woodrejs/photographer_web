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

//tmp fetch in future from strapi db
const items = [
  "https://images.unsplash.com/photo-1636142972514-0c75fc584a12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1525258706463-a8c77635beb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1513262834354-6b2bca9b5b8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
];

export default function Carousel() {
  //hooks
  const ref = useRef(null);

  //effects
  useEffect(() => {
    gsap.to(ref.current, { opacity: 1, ease: "power2", y: -15 });
  }, []);

  return (
    <Container ref={ref}>
      <Box>
        <MaskBox>
          <Mask />
          <Header>To jest jakis tytuł zachęcający do przejrzenia strony</Header>
          <Icon src={scroll_icon} alt="scroll_icon" />
        </MaskBox>
        <AliceCarousel
          mouseTracking
          items={setImages(items)}
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
    font-size: 36px;
    max-width: 60%;
    line-height: 120%;
  }
`;
const Icon = styled.img`
  position: absolute;
  height: 35px;
  margin-top: 250px;
`;

//functions
function setImages(arr) {
  return arr.map((item) => <Slide url={item} />);
}
