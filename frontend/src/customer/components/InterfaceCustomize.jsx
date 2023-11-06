import React, { useContext, useState } from 'react';
import { CustomizationContext } from '../layout/CustomizationContext';
import CartDrawer from '../components/CartDrawer';
import useSizeData from '../../hooks/useSizeData';

export default function InterfaceCustomize() {
  const { customization, setCustomization } = useContext(CustomizationContext);
  const [initialColor, setInitialColor] = useState(
    customization.layerColor[customization.layerName]
  );

  const handleSliderChange = (event, axis) => {
    const value = parseFloat(event.target.value);
    const updatedSize = {
      ...customization.layerSize[customization.layerName],
      [axis]: value,
    };

    setCustomization((prevState) => ({
      ...prevState,
      layerSize: {
        ...prevState.layerSize,
        [customization.layerName]: updatedSize,
      },
    }));
  };

  const setDefaultValuesForLayer = (layer) => {
    const defaultSize = {
      x: 1,
      y: 1,
      z: 1,
    };

    setCustomization((prevState) => ({
      ...prevState,
      layerSize: {
        ...prevState.layerSize,
        [layer]: defaultSize,
      },
      layerColor: {
        ...prevState.layerColor,
        [layer]: initialColor,
      },
    }));
  };

  const setDefaultValuesForModel = () => {
    const defaultSizes = {
      laces: { x: 1, y: 1, z: 1 },
      mesh: { x: 1, y: 1, z: 1 },
      caps: { x: 1, y: 1, z: 1 },
      inner: { x: 1, y: 1, z: 1 },
      sole: { x: 1, y: 1, z: 1 },
      stripes: { x: 1, y: 1, z: 1 },
      band: { x: 1, y: 1, z: 1 },
      patch: { x: 1, y: 1, z: 1 },
    };

    const defaultColors = { ...initialColor };

    setCustomization((prevState) => ({
      ...prevState,
      layerSize: defaultSizes,
      layerColor: defaultColors,
    }));
  };

  return (
    <div className="text-white">
      <button
        className="glass font-mono text-white p-2 mb-2 border-b-2 rounded hover:bg-gray-500 w-full"
        onClick={() => setDefaultValuesForLayer(customization.layerName)}
      >
        Reset Color
      </button>
      <CartDrawer />
    </div>
  );
}
