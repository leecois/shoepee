import React from 'react';
import Hero from '../../components/Hero/Hero';
import HeroMessage from '../../components/Hero/HeroMessage';
import Collection from '../../components/Product/Collection';
import StepCustomize from '../../components/Steps/stepsCustomize';
import Testimonial from '../../components/Testimonial/testimonial';
import Stacked from '../../components/Stacked/Stacked';
import Stacked2 from '../../components/Stacked/Stacked2';
import StackedCenter from '../../components/Stacked/StackedCenter';
import Shoepee from '../../components/KeenSlider/Shoepee';

const HomePage = () => {
  return (
    <>
      <Hero />
      <StepCustomize />
      <div>
        <Stacked2 />
      </div>
      <StackedCenter />
      <div>
        <Stacked />
      </div>
      {/* <Collection /> */}
      <HeroMessage />
      <Testimonial />
      <Shoepee />
    </>
  );
};

export default HomePage;
