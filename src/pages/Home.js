import React from "react";
import HeroSection from "../components/UI/HeroSection";
import Cards from "../components/UI/Cards";
import Stack from "../components/UI/Stack";
import { HeroText } from "../Assets/Data/HeroText";
export const Home = () => {
  return (
    <div className="">
      <HeroSection
        titleTop={HeroText.titleTop}
        titleBottom={HeroText.titleBottom}
        descriptionTop={HeroText.descriptionTop}
        descriptionBottom={HeroText.descriptionBottom}
      />
      <Cards />
      <Stack />
    </div>
  );
};

export default Home;
