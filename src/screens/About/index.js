import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import LazyImage from "react-lazy-blur-image";
import gsap from "gsap";
//components
import Title from "../../components/Title";
import Transition from "../../components/Transition";
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
      <Transition />
      <Header title="o mnie" />
      <Box>
        <ImageBox ref={ref}>
          <LazyImage
            placeholder={
              "https://images.unsplash.com/photo-1438109491414-7198515b166b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            }
            uri={
              "https://images.unsplash.com/photo-1438109491414-7198515b166b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            }
            render={(src, style) => <Image src={src} style={style} />}
          />
        </ImageBox>

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
    </Container>
  );
}

//styles
const Container = styled.div`
  min-height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  order: 3;
`;
const Box = styled.section`
  width: 100%;
  max-width: 1366px;
  padding-bottom: 15vh;
`;
const Header = styled(Title)`
  height: 20vh;
`;
const ImageBox = styled.div`
  width: 100%;
  height: 60vh;
  ${vars.shadow}
  overflow: hidden;
  opacity: 0;
  transform: translateY(15px);
`;
const Image = styled.img`
  width: 100%;
  min-height: 100%;
`;
const Text = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  padding: 0 20px;
  padding-top: 35px;
  opacity: 0.8;
`;
