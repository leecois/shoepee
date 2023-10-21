import { useContext, useState, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import styled from '@emotion/styled';
import Circle from '@uiw/react-color-circle';
import { CustomizationContext } from '../layout/CustomizationContext';

const StyledColorPicker = styled(HexColorPicker)`
  &.react-colorful {
    width: 100%;
    height: 200px;
  }

  & .react-colorful__hue {
    height: 30px;
  }
`;

export default function CustomColorPicker() {
  const { customization, setCustomization } = useContext(CustomizationContext);
  const [colorOnCircle, setColorOnCircle] = useState('#1A0E3E');
  const [hexColorPicker, setHexColorPicker] = useState(
    customization.layerColor[customization.layerName]
  );

  useEffect(() => {
    setHexColorPicker(customization.layerColor[customization.layerName]);
  }, [customization.layerName]);

  function handleColorPicker(color) {
    setHexColorPicker(color);
    setCustomization((prevState) => ({
      ...prevState,
      layerColor: {
        ...prevState.layerColor,
        [customization.layerName]: color,
      },
    }));
  }

  const handleColorChangeOnCircle = (color) => {
    setColorOnCircle(color.hex);
    setHexColorPicker(color.hex);
    setCustomization((prevState) => ({
      ...prevState,
      layerColor: {
        ...prevState.layerColor,
        [customization.layerName]: color.hex,
      },
    }));
  };

  return (
    <div className="flex flex-col items-center">
      <Circle
        colors={['#1A0E3E', '#1F1A70', '#DB488B', '#FF83F6', '#3ED0EB']}
        color={colorOnCircle}
        onChange={handleColorChangeOnCircle}
      />

      <StyledColorPicker
        className="w-60"
        color={hexColorPicker}
        onChange={handleColorPicker}
      />
    </div>
  );
}
