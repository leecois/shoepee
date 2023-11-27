import React from 'react';
import useModelData from '../../../hooks/useModelData';
import useBrandData from '../../../hooks/useBrandData';
import Hero from '../../components/Hero/Hero';
import Shoepee from '../../components/KeenSlider/Shoepee';
import Stacked from '../../components/Stacked/Stacked';
import Stacked2 from '../../components/Stacked/Stacked2';

const HomePage = () => {
  const { modelList } = useModelData();
  const { brandList } = useBrandData();

  return (
    <>
      <Hero />

      {brandList.length > 0 && <Stacked2 brandList={brandList} />}
      {modelList.length > 0 && <Stacked modelList2={modelList} />}
      {/* <StepCustomize /> */}
      <Shoepee />
    </>
  );
};
export default HomePage;
