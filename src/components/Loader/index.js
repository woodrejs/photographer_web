import React from "react";
import styled from "styled-components";
//components
import BarLoader from "react-spinners/BarLoader";
//utils
import { vars } from "../../utils/vars";
//assets
import Logo_dark from "./logo_dark.svg";

export default function Loader() {
  return (
    <Container>
      <Box>
        <Logo src={Logo_dark} />
      </Box>
    </Container>
  );
}

const Container = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.section``;
const Logo = styled.img`
  height: 10vh;
  margin-bottom: 15vh;
`;
// import React from "react";
// import styled from "styled-components";
// //components
// import BarLoader from "react-spinners/BarLoader";
// //utils
// import { vars } from "../../utils/vars";
// //assets
// import Logo_dark from "./logo_dark.svg";

// export default function Loader() {
//   return (
//     <Container>
//       <Box>
//         <Logo src={Logo_dark} />
//       </Box>

//       <BarLoader
//         color={"grey"}
//         loading={true}
//         width={window.innerWidth}
//         speedMultiplier={0.5}
//       />
//     </Container>
//   );
// }

// const Container = styled.section`
//   width: 100%;
//   height: 100vh;

//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;

//   position: relative;

//   background-color: ${({ theme }) => theme.colors.dark};
// `;
// const Box = styled.section`
//   flex: 1;

//   display: flex;
//   justify-content: center;
//   align-items: flex-start;

//   @media ${vars.device.desktop} {
//     align-items: center;
//   }
// `;

// const Logo = styled.img`
//   height: 10vh;
//   margin-top: 20vh;

//   @media ${vars.device.desktop} {
//     margin-top: unset;
//   }
// `;
