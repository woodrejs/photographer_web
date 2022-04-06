import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";
import ImageItem from "../../../../components/ImageItem";
import { vars } from "../../../../utils/vars";
import { useInView } from "react-intersection-observer";
import { getDevice } from "../../../../utils/functions";

export default React.memo(function GridList({ list }) {
  const revealRefs = useRef([]);
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const device = getDevice();

  const handleRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (inView && device !== "mobile") {
      gsap.to(revealRefs.current, {
        opacity: 1,
        ease: "power2",
        stagger: 0.15,
        y: -15,
      });
    }
  }, [inView, list, device]);

  return (
    <Container ref={ref}>
      {list.map((item, index) => {
        if (index > 5) return null;

        return (
          <GridItem
            key={item.id}
            index={index}
            title={item.title}
            path={`/sessions/${item.id}`}
            url={item.src}
            handler={handleRef}
            placeholder={item.placeholder}
            device={device}
          />
        );
      })}
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, calc(100vw - 60px));
  padding: 0;

  @media ${vars.device.tablet} {
    height: 200vh;
    padding: 0 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
  @media ${vars.device.desktop} {
    height: 110vh;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

const GridItem = styled(ImageItem)`
  width: 100%;
  height: 100%;
  opacity: ${({ device }) => (device === "mobile" ? 1 : 0)};
  transform: ${({ device }) =>
    device === "mobile" ? "translateY(0px)" : "translateY(15px)"};

  ${(props) => generateStyle(props.index)};
`;

function generateStyle(index) {
  let arr = [];

  switch (index) {
    case 0:
      arr = ["1/2", "1/2", "1/2", "1/2", "1/2", "1/2"];
      break;
    case 1:
      arr = ["unset", "unset", "1/3", "2/3", "1/3", "2/3"];
      break;
    case 2:
      arr = ["unset", "unset", "2/4", "1/2", "1/2", "3/4"];
      break;
    case 3:
      arr = ["unset", "unset", "3/5", "2/3", "2/4", "1/2"];
      break;
    case 4:
      arr = ["unset", "unset", "4/6", "1/2", "3/4", "2/3"];
      break;
    case 5:
      arr = ["unset", "unset", "5/6", "2/3", "2/4", "3/4"];
      break;
    default:
      break;
  }

  return `
  grid-row: ${arr[0]};
  grid-column: ${arr[1]};

  @media ${vars.device.tablet} {
    grid-row: ${arr[2]};
    grid-column: ${arr[3]};
  }
  @media ${vars.device.desktop} {
    grid-row: ${arr[4]};
    grid-column: ${arr[5]};
  }
  `;
}
