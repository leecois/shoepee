import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { useContext, useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CustomColorPicker from '../components/CustomColorPicker';
import InterfaceCustomize from '../components/InterfaceCustomize';
import { CustomizationContext } from '../layout/CustomizationContext';

export default function MobileCustomizationInterface() {
  const { isOpenModal, customization, setIsOpenModal } =
    useContext(CustomizationContext);
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();

  const handleClickInside = () => setIsOpenModal(true);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (myRef.current && !myRef.current.contains(e.target)) {
        setIsOpenModal(false);
      }
    };

    document.body.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.body.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 right-4 mt-2">
      <div className="w-80 headingGlass text-meta-2 px-2">
        <div className="flex justify-between mt-2">
          <p className="p-2">Shoe Customize</p>
          {isOpenModal && (
            <button
              onClick={() => setIsOpenModal(!isOpenModal)}
              className="border border-white text-white p-2 hover:bg-gray-200 rounded-full"
              aria-label="Collapse menu"
            >
              <ChevronUpIcon className="w-6 h-6" />
            </button>
          )}
        </div>
        <h1 className="text-lg p-2 font-mono">
          {customization.layerName
            ? customization.layerName
            : 'Click on a layer to start editing!'}
        </h1>
      </div>

      <div className="absolute m-auto p-2">
        {isOpenModal && (
          <div ref={myRef} onClick={handleClickInside}>
            <Carousel
              className="glass text-meta-2 px-4"
              swipeable={false}
              showThumbs={false}
            >
              <div className="pb-5">
                <h3 className="text-sm py-2">Layer color</h3>
                <CustomColorPicker />
              </div>
              <div className="pb-5">
                <h3 className="text-sm py-2"> ... </h3>
                <InterfaceCustomize />
              </div>
            </Carousel>
          </div>
        )}
      </div>
      <div className="fixed bottom-4 right-4  text-black font-bold py-2 px-4 rounded">
        <InterfaceCustomize />
      </div>
    </div>
  );
}
