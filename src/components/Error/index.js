import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Title from "../Title";
import { setError } from "../../redux/app.slice";

export default function Error({ message }) {
  //hooks
  const dispatch = useDispatch();
  //handlers
  const handleClick = () => dispatch(setError([false, null]));

  return (
    <Container onClick={handleClick}>
      <Title title="Wystąpił błąd" subTitle={message} />
    </Container>
  );
}
//styles
const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.bck};
`;
