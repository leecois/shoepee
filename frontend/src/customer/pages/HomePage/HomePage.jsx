import React from 'react';
import Hero from '../../components/Hero/Hero';
import HeroMessage from '../../components/Hero/HeroMessage';
import Collection from '../../components/Product/Collection';
import StepCustomize from '../../components/Steps/stepsCustomize';
import Testimonial from '../../components/Testimonial/testimonial';
import FullModal from '../../components/Modal/FullModal';

const HomePage = () => {
  return (
    <>
      <Hero />
      <StepCustomize />
      <HeroMessage />
      <Collection />
      <Testimonial />
    </>
  );
};

export default HomePage;
