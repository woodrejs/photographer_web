import React from "react";
//components
import NavBar from "../../components/NavBar";
import NavDrawer from "../../components/NavDrawer";
import Carousel from "./Carousel";
import PortfolioSection from "./PortfolioSection";
import PublicationsSection from "./PublicationsSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <NavDrawer />
      <Carousel />
      <PortfolioSection />
      <PublicationsSection />
    </div>
  );
}
/*

import React from "react";

export default function NavBar() {
  return <div></div>;
}

*/
