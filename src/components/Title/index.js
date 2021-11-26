import React from "react";
import styled from "styled-components";

export default React.memo(function Title({ title, subTitle, className }) {
  return (
    <Container className={className}>
      <Box>
        <MainTitle>{title}</MainTitle>
        <SubTitle>{subTitle}</SubTitle>
      </Box>
    </Container>
  );
});

//styles
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.section`
  width: 100%;
  max-width: 1366px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainTitle = styled.h1`
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.dark};
`;
const SubTitle = styled.span`
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey};
`;
