import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
//components
import GridImagesList from "../../components/GridImagesList";
import Title from "../../components/Title";
import Transition from "../../components/Transition";
import Loader from "../../components/Loader";
//utils
import { getSingle } from "../../utils/strapi";
import { setImageSrc, setDimensions, setLeastImageSrc } from "../../utils/functions";
import { setError } from "../../redux/app.slice";

export default function Single() {
  //hooks
  const dispatch = useDispatch();
  const [single, setSingle] = useState(null);
  const { pathname } = useLocation();
  const [_, singleName, singleId] = pathname.split("/");

  useEffect(() => {
    async function init() {
      try {
        const { id, title, images, date } = await getSingle(singleName, singleId);

        setSingle({
          id,
          title,
          date,
          images: images.map((image) => {
            const { width, height } = setDimensions(image.src);

            return {
              title,
              id: image.id,
              width,
              height,
              src: setImageSrc(image.src),
              placeholder: setLeastImageSrc(image.src),
            };
          }),
        });
      } catch (error) {
        dispatch(setError([true, "Nie udało się pobrać listy zdjęć. Spróbuj ponownie."]));
      }
    }

    init();
  }, []);

  if (!single)
    return (
      <Container>
        <Loader />
      </Container>
    );

  if (!single.images.length) {
    return (
      <Container>
        <Box>
          <Message>Do tej sesji nie dodano jeszcze zdjęć :(</Message>
        </Box>
      </Container>
    );
  }

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
  min-height: 85vh;
  display: flex;
  flex-direction: column;
`;
const Header = styled(Title)`
  height: 20vh;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Message = styled.h4`
  margin-bottom: 15vh;
  color: ${({ theme }) => theme.colors.dark};
`;
