import React from "react";
import styled from "styled-components";
//components
import ButtonLink from "../../../components/ButtonLink";
import ImageItem from "../../../components/ImageItem";
//utils
import { vars } from "../../../utils/vars";

export default function publicationSection() {
  return (
    <Container>
      <Box>
        <Grid>
          <GridButton title="Publikacje" path="/publications" />
          <Image_1
            title="tytule publikcji"
            path="/publication/title"
            url="https://images.unsplash.com/photo-1616456260910-5c45b4207dd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          />
          <Image_2
            title="tytule publikcji"
            path="/publication/title"
            url="https://images.unsplash.com/photo-1616456260910-5c45b4207dd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          />
          <Image_3
            title="tytule publikcji"
            path="/publication/title"
            url="https://images.unsplash.com/photo-1616456260910-5c45b4207dd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          />
          <Image_4
            title="tytule publikcji"
            path="/publication/title"
            url="https://images.unsplash.com/photo-1616456260910-5c45b4207dd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          />
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </Text>
        </Grid>
      </Box>
    </Container>
  );
}

//styles
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Box = styled.section`
  max-width: 1366px;
  width: 100%;
  padding: 0 20px;

  height: 250vh;

  @media ${vars.device.tablet} {
    height: 140vh;
  }
  @media ${vars.device.desktop} {
    padding: 15vh 20px;
    height: 170vh;
  }
`;
const Grid = styled.div`
  width: 100%;
  height: 100%;
  grid-gap: 20px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15vh repeat(4, 1fr) 15vh;

  @media ${vars.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${vars.device.desktop} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;
const GridButton = styled(ButtonLink)`
  height: unset;
  @media ${vars.device.tablet} {
    grid-column: 1/3;
  }
  @media ${vars.device.desktop} {
    grid-column: 1/2;

    justify-self: start;
    align-self: start;
  }
`;
const Image_1 = styled(ImageItem)`
  @media ${vars.device.tablet} {
    grid-row: 2/4;
    grid-column: 1/2;
  }
  @media ${vars.device.desktop} {
    grid-row: 1/3;
    grid-column: 2/5;
  }
`;
const Image_2 = styled(ImageItem)`
  @media ${vars.device.tablet} {
    grid-row: 2/3;
    grid-column: 2/3;
  }
  @media ${vars.device.desktop} {
    grid-row: 2/3;
    grid-column: 1/2;
  }
`;
const Image_3 = styled(ImageItem)`
  @media ${vars.device.tablet} {
    grid-row: 4/6;
    grid-column: 1/2;
  }
  @media ${vars.device.desktop} {
    grid-row: 3/5;
    grid-column: 2/4;
  }
`;
const Image_4 = styled(ImageItem)`
  @media ${vars.device.tablet} {
    grid-row: 3/5;
    grid-column: 2/3;
  }
  @media ${vars.device.desktop} {
    grid-row: 3/4;
    grid-column: 4/5;
  }
`;
const Text = styled.p`
  justify-self: start;
  align-self: start;

  font-size: 14px;
  color: ${({ theme }) => theme.colors.dark};

  @media ${vars.device.tablet} {
    align-self: end;
    grid-row: 5/6;
    grid-column: 2/3;
  }
  @media ${vars.device.desktop} {
    grid-row: 4/5;
    grid-column: 1/2;
  }
`;
