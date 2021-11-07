import React, { useState } from "react";
import styled from "styled-components";
//utils
import { vars } from "../../../utils/vars";

export default function GrideItem({ badge, photo, left, top, handler, }) {
  //hooks
  const [isSelected, setIsSelected] = useState(false);

  //handlers
  const handleOnClick = (e) => {
    setIsSelected(!isSelected);
    handler();
  };

  return (
    <Container height={photo.height} width={photo.width} left={left} top={top}>
      <Badge>{badge}</Badge>
      <Image onClick={handleOnClick} photo={photo} />
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
  padding: 10px;
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
const Badge = styled.span`
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
