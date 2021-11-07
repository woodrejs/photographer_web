import React from "react";
//components
import NavBar from "../../components/NavBar";
import NavDrawer from "../../components/NavDrawer";
import Carousel from "./Carousel";
import PortfolioSection from "./PortfolioSection";
import PublicationsSection from "./PublicationsSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <NavDrawer />
      <Carousel />
      <PortfolioSection />
      <PublicationsSection />
      <Footer />
    </div>
  );
}
