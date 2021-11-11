import React from "react";
import styled from "styled-components";
//components
import Title from "../../components/Title";
import Transition from "../../components/Transition";

export default function Page404() {
  return (
    <Container>
      <Transition />
      <Header title="Page404" subTitle="nie ma takiej strony :(" />
    </Container>
  );
}

const Container = styled.div`
  order: 3;
  min-height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled(Title)``;
