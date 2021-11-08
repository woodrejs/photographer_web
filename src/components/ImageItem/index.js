import React, { useRef } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
//utils
import { vars } from "../../utils/vars";

export default function ImageItem({ url, title, path, className, handler = null }) {
  //hooks
  const ref = useRef(null);

  //handlers
  const handleMouseEnter = () => {
    gsap.to(ref.current, {
      duration: 0.3,
      ease: "power",
      scale: 1.1,
      rotateZ: 3,
      opacity: 0.8,
    });
  };
  const handleMouseLeave = () => {
    gsap.to(ref.current, {
      duration: 0.3,
      ease: "power",
      scale: 1,
      rotateZ: 0,
      opacity: 1,
    });
  };

  return (
    <Container className={className} ref={handler}>
      <Box
        to={path}
        url={url}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={ref}
      ></Box>
      <Title children={title} />
    </Container>
  );
}

//styles
const Container = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateY(-15px);
  cursor: pointer;
  ${vars.shadow}
  display: flex;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.dark};
`;
const Box = styled(NavLink)`
  flex: 1;
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  transform-origin: center;
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
