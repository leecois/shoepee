import React from "react";
import Hero from "../../components/Hero/Hero";
import Billboard from "../../components/Billboard/Billboard";
import HeroMessage from "../../components/Hero/HeroMessage";
import Footer from "../../components/footer";
import StepCustomize from "../../components/Steps/stepsCustomize";
import StepCleaning from "../../components/Steps/stepsCleaning";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HeroMessage />
      <StepCustomize />
      <Billboard />
      <StepCleaning />
      <Footer />
    </div>
  );
};

export default HomePage;
