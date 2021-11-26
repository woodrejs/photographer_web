import React, { useRef } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LazyImage from "react-lazy-blur-image";
import gsap from "gsap";
//components
import Badge from "../Badge";
//utils
import { vars } from "../../utils/vars";

export default React.memo(function ImageItem({
  url,
  title,
  path,
  className,
  handler = null,
  placeholder,
}) {
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={ref}
      >
        <LazyImage
          placeholder={placeholder}
          uri={url}
          render={(src, style) => <Image src={src} style={style} />}
        />
      </Box>
      <Badge title={title} />
    </Container>
  );
});

//styles
const Container = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateY(15px);
  cursor: pointer;
  ${vars.shadow}
  display: flex;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.dark};
`;
const Box = styled(NavLink)`
  flex: 1;
  position: relative;
  transform-origin: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  min-height: 100%;
`;
