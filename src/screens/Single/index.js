import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
//components
import GridImagesList from "../../components/GridImagesList";
import Title from "../../components/Title";
import Transition from "../../components/Transition";
import Loader from "../../components/Loader";
//utils
import { getSingle } from "../../utils/strapi";
import { getRandomInt, getImageSize } from "../../utils/functions";

export default function Single() {
  //hooks
  const [single, setSingle] = useState(null);
  const { pathname } = useLocation();
  const [_, singleName, singleId] = pathname.split("/");

  useEffect(() => {
    async function init() {
      const { id, title, images, date } = await getSingle(singleName, singleId);

      setSingle({
        id,
        title,
        date,
        images: images.map((image) => ({
          title,
          id: image.id,
          width: getRandomInt(1, 3),
          height: getRandomInt(1, 3),
          src: getImageSize(image.src),
        })),
      });
    }
    init();
  }, []);

  if (!single)
    return (
      <Container>
        <Loader />
      </Container>
    );

  return (
    <Container>
      <Transition />
      <Header title={single.title} subTitle={single.date} />
      <GridImagesList photos={single.images} />
    </Container>
  );
}
//styles
const Container = styled.div`
  order: 3;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Header = styled(Title)`
  height: 20vh;
`;
