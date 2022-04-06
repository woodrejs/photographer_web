import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";
import ButtonLink from "../../../components/ButtonLink";
import ImageItem from "../../../components/ImageItem";
import { vars } from "../../../utils/vars";
import { useInView } from "react-intersection-observer";
import { getDevice } from "../../../utils/functions";

export default React.memo(function PublicationSection({ list }) {
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
  }, [inView, device]);

  if (!list.length) return null;

  return (
    <Container>
      <Box>
        <Grid ref={ref}>
          <GridButton title="Publikacje" path="/publications" />

          {list.map((item, index) => {
            if (index > 3) return null;
            return (
              <GridItem
                index={index}
                title={item.title}
                path={`/publications/${item.id}`}
                url={item.src}
                handler={handleRef}
                key={item.id}
                placeholder={item.placeholder}
                device={device}
              />
            );
          })}

          <Text>
            Publikacje ukazały się w magazynach między innymi w Niemczech,
            Wielkiej Brytanii, Francji, Holandii jak i w magazynach
            międzynarodowych lub magazynach online.
          </Text>
        </Grid>
      </Box>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  padding-bottom: 10vh;

  @media ${vars.device.desktop} {
    padding-bottom: 0;
  }
`;
const Box = styled.section`
  max-width: 1366px;
  width: 100%;
  padding: 0 20px;
  height: 250vh;
  @media ${vars.device.tablet} {
    height: 140vh;
  }
  @media ${vars.device.desktop} {
    padding: 15vh 20px;
    height: 170vh;
  }
`;
const Grid = styled.div`
  width: 100%;
  height: 100%;
  grid-gap: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15vh repeat(4, 1fr) 15vh;

  @media ${vars.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${vars.device.desktop} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;
const GridButton = styled(ButtonLink)`
  height: unset;

  @media ${vars.device.tablet} {
    grid-column: 1/3;
  }
  @media ${vars.device.desktop} {
    grid-column: 1/2;
    justify-self: start;
    align-self: start;
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
const Text = styled.p`
  justify-self: start;
  align-self: start;
  opacity: 0.8;

  font-size: 14px;
  color: ${({ theme }) => theme.colors.dark};
  padding-top: 3vh;

  @media ${vars.device.tablet} {
    align-self: end;
    grid-row: 5/6;
    grid-column: 2/3;
    padding-top: 0;
  }
  @media ${vars.device.desktop} {
    grid-row: 4/5;
    grid-column: 1/2;
  }
`;

function generateStyle(index) {
  let arr = [];

  switch (index) {
    case 0:
      arr = ["unset", "unset", "2/4", "1/2", "1/3", "2/5"];
      break;
    case 1:
      arr = ["unset", "unset", "2/3", "2/3", "2/3", "1/2"];
      break;
    case 2:
      arr = ["unset", "unset", "4/6", "1/2", "3/5", "2/4"];
      break;
    case 3:
      arr = ["unset", "unset", "3/5", "2/3", "3/4", "4/5"];
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
