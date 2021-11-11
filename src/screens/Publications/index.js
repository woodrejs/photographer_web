import React, { useEffect, useState } from "react";
import styled from "styled-components";
//components
import Title from "../../components/Title";
import GridLinksList from "../../components/GridLinksList";
import Transition from "../../components/Transition";
import Loader from "../../components/Loader";
//utils
import { getList } from "../../utils/strapi";
import { getRandomInt, getDevice } from "../../utils/functions";

export default function Publications() {
  //hooks
  const [list, setList] = useState(null);

  //effects
  useEffect(() => {
    async function init() {
      const resp = await getList("publications");
      const sessions = resp.map(({ id, date, title, src }) => ({
        id,
        title,
        date,
        src: getDevice() === "mobile" ? src.formats.small.url : src.formats.medium.url,
        width: getRandomInt(1, 3),
        height: getRandomInt(1, 3),
      }));

      setList(sessions);
    }
    init();
  }, []);

  if (!list) {
    return (
      <Container>
        <Loader />
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
