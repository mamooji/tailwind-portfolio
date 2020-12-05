import React from "react";
import HeroSection from "../components/UI/HeroSection";
import Cards from "../components/UI/Cards";
import { HeroText } from "../Assets/Data/HeroText";
export const Home = () => {
  return (
    <div className="mt-12">
      <HeroSection
        titleTop={HeroText.titleTop}
        titleBottom={HeroText.titleBottom}
        descriptionTop={HeroText.descriptionTop}
        descriptionBottom={HeroText.descriptionBottom}
      />
      <Cards />
    </div>
  );
};

export default Home;
