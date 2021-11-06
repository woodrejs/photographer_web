import React from "react";
import styled from "styled-components";
//components
import AliceCarousel from "react-alice-carousel";
//utils
import { vars } from "../../../utils/vars";

//tmp fetch in future from strapi db
const items = [
  "https://images.unsplash.com/photo-1636142972514-0c75fc584a12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1525258706463-a8c77635beb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1513262834354-6b2bca9b5b8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
];

export default function Carousel() {
  return (
    <Container>
      <Box>
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
//functions
function setImages(arr) {
  const handleDragStart = (e) => e.preventDefault();

  return arr.map((item) => (
    <Image onDragStart={handleDragStart} role="presentation" url={item} />
  ));
}
//styles
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Box = styled.section`
  max-width: 1366px;
  width: 100%;
  ${vars.shadow}//shadow
`;
const Image = styled.figure`
  width: 100%;
  height: 70vh;

  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
