import React from "react";
import styled from "styled-components";
//components
import RotateLoader from "react-spinners/RotateLoader";

export default React.memo(function Loader() {
  return (
    <Container>
      <Box>
        <RotateLoader color={"#02020f"} loading={true} size={15} speedMultiplier={0.5} />
      </Box>
    </Container>
  );
})

const Container = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.section`
  margin-bottom: 15vh;
`;
