import React from 'react';
import useBrandData from '../../../hooks/useBrandData';
import Hero from '../../components/Hero/Hero';
import Shoepee from '../../components/KeenSlider/Shoepee';
import Stacked from '../../components/Stacked/Stacked';
import Stacked2 from '../../components/Stacked/Stacked2';
import StackedCenter from '../../components/Stacked/StackedCenter';
import StepCustomize from '../../components/Steps/stepsCustomize';
import Testimonial from '../../components/Testimonial/testimonial';
import useModelData from '../../../hooks/useModelData';

const HomePage = () => {
  const { brandList } = useBrandData();
  const { modelList } = useModelData();

  return (
    <>
      <Hero />
      <StepCustomize />
      {modelList.length > 0 && <Stacked2 modelList={modelList} />}
      {brandList.length > 0 && <StackedCenter brandList={brandList} />}
      {modelList.length > 0 && <Stacked modelList2={modelList} />}
      <Testimonial />
      <Shoepee />
    </>
  );
};
export default HomePage;
