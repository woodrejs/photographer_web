import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import LazyImage from "react-lazy-blur-image";
import gsap from "gsap";
//components
import Badge from "../Badge";
//utils
import { vars } from "../../utils/vars";

export default function GridItem({ photo, handler, top, left, badge = null }) {
  //hooks
  const { ref, inView, entry } = useInView({ threshold: 0.15, triggerOnce: true });
  const imageRef = useRef(null);

  //   //handlers
  const handleOnClick = () => handler();
  const handleMouseEnter = () => {
    gsap.to(imageRef.current, {
      duration: 0.3,
      ease: "power",
      scale: 1.1,
      rotateZ: 3,
      opacity: 0.8,
    });
  };
  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      duration: 0.3,
      ease: "power",
      scale: 1,
      rotateZ: 0,
      opacity: 1,
    });
  };

  //   //effects
  useEffect(() => {
    if (inView) {
      gsap.to(entry.target, { opacity: 1, ease: "power2", y: -15 });
    }
  }, [inView, entry]);

  return (
    <Container
      ref={ref}
      left={left}
      top={top}
      height={photo.height}
      width={photo.width}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box>
        <Badge title={badge ?? photo.title} />

        <LazyImage
          placeholder={photo.placeholder}
          uri={photo.src}
          render={(src, style) => (
            <img {...photo} ref={imageRef} onClick={handleOnClick} style={style} />
          )}
        />
      </Box>
    </Container>
  );
}
//styles
const Container = styled.div`
  position: absolute;
  left: ${({ left }) => `${left}px`};
  top: ${({ top }) => `${top}px`};
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  cursor: pointer;
  overflow: hidden;
  transform-origin: center;

  padding: 10px;
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${vars.shadow}
`;
const Image = styled.img``;
