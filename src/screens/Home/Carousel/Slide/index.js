import React from "react";
import styled from "styled-components";
import LazyImage from "react-lazy-blur-image";
import { vars } from "../../../../utils/vars";

export default React.memo(function Slide({ url, placeholder }) {
  //handlers
  const handleDragStart = (e) => e.preventDefault();

  return (
    <LazyImage
      placeholder={placeholder}
      uri={url}
      render={(src, style) => (
        <Image
          src={src}
          style={style}
          onDragStart={handleDragStart}
          role="presentation"
        />
      )}
    />
  );
});
//styles
const Image = styled.img`
  width: 200%;
  min-height: unset;
  @media ${vars.device.tablet} {
    width: 100%;
    min-height: 75vh;
  }
`;
