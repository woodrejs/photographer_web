import React from "react";
import styled from "styled-components";
//components
import Gallery from "react-photo-gallery";
import { useNavigate, useLocation } from "react-router-dom";
import GridItem from "../GridItem";
//utils
import { setColumns } from "../../utils/functions";

export default function GridLinksList({ photos }) {
  //hooks
  const navigate = useNavigate();
  const location = useLocation();

  //handlers
  const handleLink = (id) => {
    location.pathname === "/portfolio"
      ? navigate(`/sessions/${id}`)
      : navigate(`/publications/${id}`);
  };
  const handleImageRenderer = ({ photo, left, top }) => (
    <GridItem
      key={photo.id}
      photo={photo}
      left={left}
      top={top}
      handler={() => handleLink(photo.id)}
    />
  );

  if (!photos || !photos.length) return null;

  return (
    <Container>
      <Box>
        <Gallery
          photos={photos}
          direction="column"
          columns={setColumns(true)}
          renderImage={handleImageRenderer}
        />
      </Box>
    </Container>
  );
}
//styles
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 20vh;
`;
const Box = styled.section`
  max-width: 1366px;
  width: 100%;
`;
