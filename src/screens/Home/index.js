import React, { useState, useEffect } from "react";
import styled from "styled-components";
//components
import Carousel from "./Carousel";
import PortfolioSection from "./PortfolioSection";
import PublicationsSection from "./PublicationsSection";
import Transition from "../../components/Transition";
import Loader from "../../components/Loader";
//utils
import { getList, getSlides } from "../../utils/strapi";
import { getImageSize } from "../../utils/functions";

export default function Home() {
  //hooks
  const [portfolio, setPortfolio] = useState(null);
  const [publications, setPublications] = useState(null);
  const [slides, setSlides] = useState(null);

  useEffect(() => {
    async function init() {
      if (!portfolio) {
        const resp = await getList("sessions");
        resp.sort((a, b) => new Date(b.date) - new Date(a.date));
        const data = resp.map(({ id, title, date, src }) => ({
          id,
          title,
          date,
          src: getImageSize(src),
        }));

        setPortfolio(data);
      }
      if (!publications) {
        const resp = await getList("publications");
        resp.sort((a, b) => new Date(b.date) - new Date(a.date));
        const data = resp.map(({ id, title, date, src }) => ({
          id,
          title,
          date,
          src: getImageSize(src),
        }));

        setPublications(data);
      }
      if (!slides) {
        const resp = await getSlides();

        const data = resp.map(({ id, src }) => ({
          id,
          src: getImageSize(src),
        }));

        setSlides(data);
      }
    }
    init();
  }, []);

  if (!portfolio || !publications || !slides)
    return (
      <Container>
        <Loader />
      </Container>
    );

  return (
    <Container>
      <Transition />
      <Carousel list={slides} />
      <PortfolioSection list={portfolio} />
      <PublicationsSection list={publications} />
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
