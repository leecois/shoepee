import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import { CustomizationContext } from '../layout/CustomizationContext';
import CustomColorPicker from './CustomColorPicker.jsx';
import SizeCustomizer from './SizeCustomizer.jsx';

export default function CustomizationInterface() {
  const { isOpenModal, customization, setIsOpenModal } =
    useContext(CustomizationContext);

  const heightSideBar = window.innerHeight > 909 ? 'auto' : '80vh';
  const overflowYSideBar = window.innerHeight > 909 ? 'hidden' : 'scroll';

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <div
      style={{ position: 'absolute', top: 0, right: '1%' }}
      className="p-3 ml-3 w-80"
    >
      <div className="headingGlass mb-4 p-4 text-meta-2">
        <div className="flex justify-between">
          <h1>Shoe Customize</h1>
          {isOpenModal && (
            <ChevronUpIcon
              onClick={toggleModal}
              aria-label="Collapse menu"
              className="w-5 h-5"
            />
          )}
        </div>
        <h1 className="text-lg font-mono">
          {customization.layerName || 'Click on a layer to start editing!'}
        </h1>
      </div>
      <AnimatePresence>
        {isOpenModal && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: heightSideBar,
                overflowY: overflowYSideBar,
                overflowX: 'hidden',
              },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="space-y-4">
              <div className="text-meta-2 glass p-4 space-y-4">
                <h2 className="text-sm py-2">Layer color</h2>
                <CustomColorPicker />
              </div>

              <div className="text-meta-2 glass p-4 space-y-4">
                <h2 className="text-sm py-2">Layer size</h2>
                <SizeCustomizer />
              </div>
              <button className="bg-white font-bold text-black border border-white p-2 rounded hover:bg-gray-200 w-full">
                Add To Cart
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
