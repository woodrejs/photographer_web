import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
//components
import Title from "../../components/Title";
import GridLinksList from "../../components/GridLinksList";
import Transition from "../../components/Transition";
import Loader from "../../components/Loader";
//utils
import { getList } from "../../utils/strapi";
import {
  setImageThumbSrc,
  setDimensions,
  setLeastImageSrc,
} from "../../utils/functions";
import { setError } from "../../redux/app.slice";

export default React.memo(function Publications() {
  //hooks
  const dispatch = useDispatch();
  const [list, setList] = useState(null);

  //effects
  useEffect(() => {
    async function init() {
      try {
        const resp = await getList("publications");
        const sessions = resp.map((photo) => {
          const { id, date, title, src } = photo;
          const { width, height } = setDimensions(src);

          return {
            id,
            title,
            date,
            src: setImageThumbSrc(src),
            width,
            height,
            placeholder: setLeastImageSrc(src),
          };
        });

        setList(sessions);
      } catch (error) {
        dispatch(
          setError([
            true,
            "Nie udało się pobrać listy publikacji. Spróbuj ponownie.",
          ])
        );
      }
    }

    init();
  }, [dispatch]);

  if (!list) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (!list.length) {
    return (
      <Container>
        <Box>
          <Message>W tej chwili nie ma żadnych publikacji :(</Message>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Transition />
      <Header title="publikacje" />
      <GridLinksList photos={list} />
    </Container>
  );
});
//styles
const Container = styled.div`
  order: 3;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
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
const Header = styled(Title)`
  height: 20vh;
  margin-bottom: 4vh;
`;
