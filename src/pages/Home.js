import React from "react";
import HeroSection from "../components/UI/HeroSection";
import Card from "../components/UI/Card";
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
      <Card />
    </div>
  );
};

export default Home;
