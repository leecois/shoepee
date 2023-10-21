import React, { useContext, useState } from 'react';
import { CustomizationContext } from '../layout/CustomizationContext';

export default function SizeCustomizer() {
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
    <div className="text-white p-4">
      <div className="mb-4">
        <label className="text-sm">Width</label>
        <input
          type="range"
          min="0"
          max="3"
          step="0.2"
          value={customization.layerSize[customization.layerName].z}
          onChange={(e) => handleSliderChange(e, 'z')}
          className="w-full"
        />
      </div>

      <div className="mb-4">
        <label className="text-sm">Height</label>
        <input
          type="range"
          min="0"
          max="3"
          step="0.2"
          value={customization.layerSize[customization.layerName].y}
          onChange={(e) => handleSliderChange(e, 'y')}
          className="w-full"
        />
      </div>

      <div className="mb-4">
        <label className="text-sm">Depth</label>
        <input
          type="range"
          min="0"
          max="3"
          step="0.2"
          value={customization.layerSize[customization.layerName].x}
          onChange={(e) => handleSliderChange(e, 'x')}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          className="glass text-gray-300 p-2 rounded hover:bg-meta-2 w-full"
          onClick={() => setDefaultValuesForLayer(customization.layerName)}
        >
          Reset Color
        </button>

        <button
          className="glass text-gray-300 p-2 rounded hover:bg-meta-2 w-full"
          onClick={setDefaultValuesForModel}
        >
          Reset Size
        </button>
      </div>
    </div>
  );
}
