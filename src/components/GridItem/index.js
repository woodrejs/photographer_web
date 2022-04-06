import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Badge from "../Badge";
import styled from "styled-components";
import LazyImage from "react-lazy-blur-image";
import { vars } from "../../utils/vars";
import { useInView } from "react-intersection-observer";

export default function GridItem({ photo, handler, top, left, badge = null }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  const imageRef = useRef(null);

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
            <img
              {...photo}
              ref={imageRef}
              onClick={handleOnClick}
              style={style}
              alt=""
            />
          )}
        />
      </Box>
    </Container>
  );
}

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
