import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
//components
import NavBar from "../../components/NavBar";
import NavDrawer from "../../components/NavDrawer";
import Title from "../../components/Title";
import Footer from "../../components/Footer";
//utils
import { vars } from "../../utils/vars";

export default function About() {
  //hooks
  const ref = useRef(null);

  //effects
  useEffect(() => {
    gsap.to(ref.current, { opacity: 1, ease: "power2", y: -15 });
  }, []);

  return (
    <Container>
      <NavBar />
      <NavDrawer />
      <Header title="o mnie" subTitle="agnieszka podolan" />
      <Box>
        <Image
          ref={ref}
          url="https://images.unsplash.com/photo-1438109491414-7198515b166b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        />
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </Box>
      <Footer />
    </Container>
  );
}

//styles
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Box = styled.section`
  width: 100%;
  max-width: 1366px;
  padding-bottom: 15vh;
`;
const Header = styled(Title)`
  height: 20vh;
`;
const Image = styled.figure`
  width: 100%;
  height: 60vh;
  ${vars.shadow}
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  opacity: 0;
  transform: translateY(15px);
`;
const Text = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  padding: 0 20px;
  padding-top: 35px;
`;
