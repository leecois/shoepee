import {
  Button,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { CustomizationContext } from '../layout/CustomizationContex';

export default function SizeCustomizer() {
  const { customization, setCustomization } = useContext(CustomizationContext);

  const handleSliderChange = (value, axis) => {
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

    setCustomization((prevState) => ({
      ...prevState,
      layerSize: defaultSizes,
    }));
  };

  return (
    <>
      <Text>Width</Text>
      <Slider
        aria-label="slider-width"
        min={0}
        max={3}
        step={0.2}
        value={customization.layerSize[customization.layerName].z}
        onChange={(v) => handleSliderChange(v, 'z')}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Text>Height</Text>
      <Slider
        aria-label="slider-height"
        min={0}
        max={3}
        step={0.2}
        value={customization.layerSize[customization.layerName].y}
        onChange={(v) => handleSliderChange(v, 'y')}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Text>Depth</Text>
      <Slider
        aria-label="slider-depth"
        min={0}
        max={3}
        step={0.2}
        value={customization.layerSize[customization.layerName].x}
        onChange={(v) => handleSliderChange(v, 'x')}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Button
        variant="outline"
        colorScheme="whiteAlpha"
        mt={10}
        onClick={() => setDefaultValuesForLayer(customization.layerName)}
      >
        Default values for layer
      </Button>

      <Button
        variant="outline"
        colorScheme="whiteAlpha"
        onClick={setDefaultValuesForModel}
      >
        Default values for model
      </Button>
    </>
  );
}
