import React, { useState, useCallback } from "react";
import styled from "styled-components";
//components
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useNavigate, useLocation } from "react-router-dom";
import GrideItem from "./GrideItem";
//utils
import { vars } from "../../utils/vars";

export default function ImageGrideList({ isLink = false, photos = [] }) {
  //hooks
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  //handlers
  const handleOpenLightbox = useCallback((index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  const handleCloseLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const handleLink = (title) => {
    console.log(location.pathname);
    if (location.pathname === "/portfolio") {
      return navigate(`/session/${title}`);
    }
    navigate(`/publication/${title}`);
  };

  const handleImageRenderer = ({ index, key, photo, left, top }) => (
    <GrideItem
      key={key}
      photo={photo}
      handler={isLink ? () => handleLink(photo.title) : () => handleOpenLightbox(index)}
      left={left}
      top={top}
      badge={photo.title ?? `${index + 1}/${photos.length}`}
    />
  );

  if (isLink)
    return (
      <Container>
        <Box>
          <Gallery
            photos={photos}
            direction="column"
            columns={setColumns(isLink)}
            renderImage={handleImageRenderer}
          />
        </Box>
      </Container>
    );

  return (
    <Container>
      <Box>
        <Gallery
          photos={photos}
          direction="column"
          columns={setColumns(isLink)}
          renderImage={handleImageRenderer}
        />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={handleCloseLightbox}>
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
//functions
function setColumns(isLink) {
  const windowWidth = window.innerWidth;
  const { tablet, desktop } = vars.resolutions;

  if (windowWidth >= desktop) return isLink ? 3 : 4;
  if (windowWidth >= tablet) return isLink ? 2 : 3;

  return isLink ? 1 : 2;
}
