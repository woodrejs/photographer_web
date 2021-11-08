import React from "react";
import styled from "styled-components";

export default function Slide({ url }) {
  //handlers
  const handleDragStart = (e) => e.preventDefault();

  return <Image onDragStart={handleDragStart} role="presentation" url={url} />;
}
//styles
const Image = styled.figure`
  width: 100%;
  height: 70vh;

  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
