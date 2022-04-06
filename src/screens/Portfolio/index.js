import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import styled from "styled-components";
import Loader from "../../components/Loader";
import Transition from "../../components/Transition";
import GridLinksList from "../../components/GridLinksList";
import { getList } from "../../utils/strapi";
import { setError } from "../../redux/app.slice";
import { useDispatch } from "react-redux";
import {
  setImageThumbSrc,
  setDimensions,
  setLeastImageSrc,
} from "../../utils/functions";

export default React.memo(function Portfolio() {
  const dispatch = useDispatch();
  const [list, setList] = useState(null);

  useEffect(() => {
    async function init() {
      try {
        const resp = await getList("sessions");
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
            "Nie udało się pobrać wszystkich sesji. Spróbuj ponownie.",
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
          <Message>W tej chwili nie ma żadnych sesji :(</Message>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Transition />
      <Header title="portfolio" />
      <GridLinksList photos={list} />
    </Container>
  );
});

const Container = styled.div`
  order: 3;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Header = styled(Title)`
  height: 20vh;
  margin-bottom: 4vh;
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
