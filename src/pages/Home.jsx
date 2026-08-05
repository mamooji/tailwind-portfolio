import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Cards from "../components/Card/HeroCard/Cards";
import Stacks from "../components/Stack/Stacks";
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
