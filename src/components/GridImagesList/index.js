import React, { useState, useCallback } from "react";
import styled from "styled-components";
//components
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import GridItem from "../GridItem";
//utils
import { setColumns } from "../../utils/functions";

export default function ImageGrideList({ photos }) {
  //hooks
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  //handlers
  const handleLightbox = useCallback(
    (index) => {
      setCurrentImage(index);
      setViewerIsOpen(!viewerIsOpen);
    },
    [viewerIsOpen]
  );
  const handleImageRenderer = ({ index, photo, left, top }) => (
    <GridItem
      key={photo.id}
      photo={photo}
      left={left}
      top={top}
      badge={`${index + 1}/${photos.length}`}
      handler={() => handleLightbox(index)}
    />
  );

  if (!photos || !photos.length) return null;

  return (
    <Container>
      <Box>
        <Gallery
          photos={photos}
          direction="column"
          columns={setColumns(false)}
          renderImage={handleImageRenderer}
        />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={handleLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
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
