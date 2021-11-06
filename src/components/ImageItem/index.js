import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//utils
import { vars } from "../../utils/vars";

export default function ImageItem({ url, title, path, className }) {
  return (
    <Container to={path} url={url} className={className}>
      <Title children={title} />
    </Container>
  );
}

const Container = styled(Link)`
  width: 100%;
  height: 100%;

  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  cursor: pointer;

  ${vars.shadow}
`;
const Title = styled.span`
  position: absolute;
  top: 10px;
  right: -60px;
  font-size: 12px;
  transform: rotateZ(90deg);
  transform-origin: left;
  padding: 2px 5px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.dark};

  background-color: rgba(255, 255, 255, 0.2);
`;
