import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import LazyImage from "react-lazy-blur-image";
import gsap from "gsap";
//components
import Title from "../../components/Title";
import Transition from "../../components/Transition";
//utils
import { vars } from "../../utils/vars";
import { getDevice } from "../../utils/functions";
//assets
import sm_img from "./about_767.jpg";
import md_img from "./about_991.jpg";
import lg_img from "./about_1366.jpg";

export default React.memo(function About() {
  //hooks
  const ref = useRef(null);

  const getSrc = () => {
    switch (getDevice()) {
      case "mobile":
        return sm_img;
      case "tablet":
        return md_img;
      case "desktop":
        return lg_img;
    }
  };

  console.log(getSrc());

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
            placeholder={sm_img}
            uri={getSrc()}
            render={(src, style) => <Image src={src} style={style} />}
          />
        </ImageBox>

        <Text>
          Hej! Miło mi, że tu jesteś. Mam na imię Aga i kocham piękne kadry.
          <br />
          <br />
          Jestem fotografem z zamiłowaniem do portretów a swoją przygodę z fotografią
          zaczęłam kilkanaście lat temu. Obecnie realizuję się w stylizowanych sesjach
          modowych, ale nie straszne mi też zdjęcia spontaniczne i naturalne. Dzięki tym
          skrajnościom mogę uchwycić charakter modela i uzyskać ciekawe efekty. Pasjonują
          mnie przedmioty i moda vintage, które również wykorzystuję w sesjach
          zdjęciowych. Jeśli podoba Ci się moja stylistyka, zapraszam do kontaktu.
        </Text>
      </Box>
    </Container>
  );
});

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
