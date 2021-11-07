import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
//components
import NavBar from "../../components/NavBar";
import NavDrawer from "../../components/NavDrawer";
import ImageGrideList from "../../components/ImageGrideList";
import Footer from "../../components/Footer";
import Title from "../../components/Title";

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

export default function Single() {
  let { title } = useParams();

  return (
    <Container>
      <NavBar />
      <NavDrawer />
      <Header title={title} subTitle="27.12.1988" />
      <ImageGrideList photos={photos} />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Header = styled(Title)`
  height: 20vh;
`;
