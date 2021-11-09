import React from "react";
import styled from "styled-components";

//components
import Title from "../../components/Title";
import ImageGrideList from "../../components/ImageGrideList";
import Transition from "../../components/Transition";

//strapi db
const photos = [
  {
    title: "title",
    src: "https://images.unsplash.com/photo-1634423623074-de676f545acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    width: 2,
    height: 3,
    key: "12",
  },
  {
    title: "title",
    src: "https://images.unsplash.com/photo-1634423623074-de676f545acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    width: 1,
    height: 1,
    key: "13",
  },
  {
    title: "title",
    src: "https://images.unsplash.com/photo-1634423623074-de676f545acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    width: 2,
    height: 3,
    key: "14",
  },
  {
    title: "title",
    src: "https://images.unsplash.com/photo-1634423623074-de676f545acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    width: 1,
    height: 1,
    key: "15",
  },
  {
    title: "title",
    src: "https://images.unsplash.com/photo-1634423623074-de676f545acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    width: 2,
    height: 3,
    key: "16",
  },
  {
    title: "title",
    src: "https://images.unsplash.com/photo-1634423623074-de676f545acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    width: 1,
    height: 1,
    key: "17",
  },
];

export default function Publications() {
  return (
    <Container>
      <Transition />
      <Header title="publikacje" />
      <ImageGrideList isLink photos={photos} />
    </Container>
  );
}

const Container = styled.div`
  order: 3;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Header = styled(Title)`
  height: 20vh;
`;
