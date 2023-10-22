import { useState, createContext } from 'react';

export const CustomizationContext = createContext({});

export default function CustomizationContextProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [customization, setCustomization] = useState({
    layerName: '',
    layerColor: {
      'Main Body Material': '#ffffff',
      'Sole Material': '#ffffff',
      'Tag material': '#ffffff',
      'Flap Material.002': '#ffffff',
      'Logo right Material': '#ffffff',
      'Logo left Material': '#ffffff',
      logo: '#ffffff',
      tag: '#ffffff',
      flap: '#ffffff',
      laces: '#ffffff',
      mesh: '#ffffff',
      caps: '#ffffff',
      inner: '#ffffff',
      sole: '#ffffff',
      stripes: '#ffffff',
      band: '#ffffff',
      patch: '#ffffff',
    },
  });

  const onOpenModal = () => setIsOpenModal(true);
  const onCloseModal = () => setIsOpenModal(false);

  return (
    <CustomizationContext.Provider
      value={{
        isOpenModal,
        onOpenModal,
        onCloseModal,
        setIsOpenModal,
        customization,
        setCustomization,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
}
