import React from "react";
import styled from "styled-components";
//components
import ImageItem from "../../../../components/ImageItem";
//utils
import { vars } from "../../../../utils/vars";

export default function GridList() {
  return (
    <Container>
      <Image_1
        title="session name"
        path="/session/title"
        url="https://images.unsplash.com/photo-1635807013473-95ee5fcb55ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
      />
      <Image_2
        title="session name"
        path="/session/title"
        url="https://images.unsplash.com/photo-1635807013737-0717f29cdbaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <Image_3
        title="session name"
        path="/session/title"
        url="https://images.unsplash.com/photo-1634423623074-de676f545acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <Image_4
        title="session name"
        path="/session/title"
        url="https://images.unsplash.com/photo-1635354237155-6e46a33c330a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
      />
      <Image_5
        title="session name"
        path="/session/title"
        url="https://images.unsplash.com/photo-1634588995089-52429235e058?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <Image_6
        title="session name"
        path="/session/title"
        url="https://images.unsplash.com/photo-1628281335380-449a00e56a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 250vh;

  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 0;

  @media ${vars.device.tablet} {
    height: 200vh;
    padding: 0 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
  @media ${vars.device.desktop} {
    height: 110vh;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

const Image_1 = styled(ImageItem)`
  grid-row: 1/2;
  grid-column: 1/2;
`;
const Image_2 = styled(ImageItem)`
  @media ${vars.device.tablet} {
    grid-row: 1/3;
    grid-column: 2/3;
  }
  @media ${vars.device.desktop} {
    grid-row: 1/3;
    grid-column: 2/3;
  }
`;
const Image_3 = styled(ImageItem)`
  @media ${vars.device.tablet} {
    grid-row: 2/4;
    grid-column: 1/2;
  }
  @media ${vars.device.desktop} {
    grid-row: 1/2;
    grid-column: 3/4;
  }
`;
const Image_4 = styled(ImageItem)`
  @media ${vars.device.tablet} {
    grid-row: 3/5;
    grid-column: 2/3;
  }
  @media ${vars.device.desktop} {
    grid-row: 2/4;
    grid-column: 1/2;
  }
`;
const Image_5 = styled(ImageItem)`
  @media ${vars.device.tablet} {
    grid-row: 4/6;
    grid-column: 1/2;
  }
  @media ${vars.device.desktop} {
    grid-row: 3/4;
    grid-column: 2/3;
  }
`;
const Image_6 = styled(ImageItem)`
  @media ${vars.device.tablet} {
    grid-row: 5/6;
    grid-column: 2/3;
  }
  @media ${vars.device.desktop} {
    grid-row: 2/4;
    grid-column: 3/4;
  }
`;
