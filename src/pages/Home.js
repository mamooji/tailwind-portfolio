import React from "react";
import HeroSection from "../components/UI/HeroSection";
import Cards from "../components/UI/Cards";
import Stacks from "../components/UI/Stacks";
import { HeroText } from "../Assets/Data/HeroText";
export const Home = () => {
  return (
    <>
      <HeroSection
        titleTop={HeroText.titleTop}
        titleBottom={HeroText.titleBottom}
        descriptionTop={HeroText.descriptionTop}
        descriptionBottom={HeroText.descriptionBottom}
      />
      <Cards />
      <Stacks />
    </>
  );
};

export default Home;
