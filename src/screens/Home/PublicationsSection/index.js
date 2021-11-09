import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
//components
import ButtonLink from "../../../components/ButtonLink";
import ImageItem from "../../../components/ImageItem";
//utils
import { vars } from "../../../utils/vars";

//tmp
const data = [
  {
    id: 1,
    title: "session name",
    url: "https://images.unsplash.com/photo-1635807013473-95ee5fcb55ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 2,
    title: "session name",
    url: "https://images.unsplash.com/photo-1635807013473-95ee5fcb55ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 3,
    title: "session name",
    url: "https://images.unsplash.com/photo-1635807013473-95ee5fcb55ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 4,
    title: "session name",
    url: "https://images.unsplash.com/photo-1635807013473-95ee5fcb55ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
];

export default function PublicationSection() {
  //hooks
  const revealRefs = useRef([]);
  const { ref, inView, entry } = useInView({ threshold: 0.15, triggerOnce: true });

  //handlers
  const handleRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  //effects
  useEffect(() => {
    if (revealRefs.current.length === 4 && inView) {
      gsap.to(revealRefs.current, { opacity: 1, ease: "power2", stagger: 0.15, y: -15 });
    }
  }, [revealRefs.current, inView]);

  return (
    <Container>
      <Box>
        <Grid ref={ref}>
          <GridButton title="Publikacje" path="/publications" />

          {data.map((item, index) => {
            if (index > 4) return null;
            return (
              <GridItem
                index={index}
                title={item.title}
                path={`/session/${item.title}`}
                url={item.url}
                handler={handleRef}
                key={item.id}
              />
            );
          })}

          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </Text>
        </Grid>
      </Box>
    </Container>
  );
}

//styles
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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

  ${(props) => generateStyle(props.index)};
`;
const Text = styled.p`
  justify-self: start;
  align-self: start;
  opacity: 0.8;

  font-size: 14px;
  color: ${({ theme }) => theme.colors.dark};

  @media ${vars.device.tablet} {
    align-self: end;
    grid-row: 5/6;
    grid-column: 2/3;
  }
  @media ${vars.device.desktop} {
    grid-row: 4/5;
    grid-column: 1/2;
  }
`;
//functions
function generateStyle(index) {
  let arr = [];

  //template
  //[grid_row_mobile,grid_column_mobile,grid_row_tablet,
  // grid_column_tablet,grid_row_desktop,grid_column_desktop]

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
