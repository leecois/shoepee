import React from 'react';
import Media from 'react-media';
import CustomizationInterface from '../components/CustomizationInterface';
import MobileCustomizationInterface from '../components/MobileCustomizationInterface';
import Scene from '../components/Scene/Scene';
import CustomizationContextProvider from '../layout/CustomizationContext';

const ShoeCustomize = () => {
  return (
    <>
      <CustomizationContextProvider>
        <div>
          <Scene />
          <Media query="(max-width: 599px)">
            {(matches) =>
              matches ? (
                <MobileCustomizationInterface />
              ) : (
                <CustomizationInterface />
              )
            }
          </Media>
        </div>
      </CustomizationContextProvider>
    </>
  );
};

export default ShoeCustomize;
