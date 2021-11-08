import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";
//components
import ImageItem from "../../../../components/ImageItem";
//utils
import { vars } from "../../../../utils/vars";

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
  {
    id: 5,
    title: "session name",
    url: "https://images.unsplash.com/photo-1635807013473-95ee5fcb55ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 6,
    title: "session name",
    url: "https://images.unsplash.com/photo-1635807013473-95ee5fcb55ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
];

export default function GridList() {
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
    if (revealRefs.current.length === 6 && inView) {
      gsap.to(revealRefs.current, { opacity: 1, ease: "power2", stagger: 0.15, y: 15 });
    }
  }, [revealRefs.current, inView]);

  return (
    <Container ref={ref}>
      {data.map((item, index) => {
        if (index > 5) return null;
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
    </Container>
  );
}

//styles
const Container = styled.div`
  width: 100%;
  height: 250vh;

  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
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

  ${(props) => generateStyle(props.index)};
`;
//functions
function generateStyle(index) {
  let arr = [];

  //template
  //[grid_row_mobile,grid_column_mobile,grid_row_tablet,
  // grid_column_tablet,grid_row_desktop,grid_column_desktop]

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
