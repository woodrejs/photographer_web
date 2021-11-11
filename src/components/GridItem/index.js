import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
//utils
import { vars } from "../../utils/vars";

export default function GridItem({ photo, handler, top, left, badge = null }) {
  //hooks
  const [isSelected, setIsSelected] = useState(false);
  const { ref, inView, entry } = useInView({ threshold: 0.15, triggerOnce: true });
  const imageRef = useRef(null);

  //handlers
  const handleOnClick = () => {
    setIsSelected(!isSelected);
    handler();
  };
  //handlers
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

  //effects
  useEffect(() => {
    if (inView) {
      gsap.to(entry.target, { opacity: 1, ease: "power2", y: -15 });
    }
  }, [inView]);

  return (
    <Container
      height={photo.height}
      width={photo.width}
      left={left}
      top={top}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Badge>{badge ?? photo.title}</Badge>
      <Box>
        <Image onClick={handleOnClick} photo={photo} ref={imageRef} />
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
  padding: 10px;
  opacity: 0;
  transform: translateY(15px);
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.dark};
`;
const Image = styled.div`
  height: 100%;
  width: 100%;

  background-image: ${({ photo }) => `url(${photo.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${vars.shadow}
`;
const Badge = styled.div`
  position: absolute;
  top: 20px;
  right: 0px;
  font-size: 12px;
  transform: rotateZ(90deg);
  transform-origin: left;
  padding: 2px 5px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.dark};

  background-color: rgba(255, 255, 255, 0.2);
  z-index: 100;
`;
