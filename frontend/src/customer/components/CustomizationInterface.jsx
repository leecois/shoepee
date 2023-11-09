import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import { CustomizationContext } from '../layout/CustomizationContext';
import CustomColorPicker from './CustomColorPicker';
import InterfaceCustomize from './InterfaceCustomize';

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
      <div className="headingGlass mb-4 p-4 ">
        <div className="flex text-black text-white font-bold justify-between">
          <h1>Shoe Customize</h1>
          {isOpenModal && (
            <ChevronUpIcon
              onClick={toggleModal}
              aria-label="Collapse menu"
              className="w-5 h-5"
            />
          )}
        </div>
        <h1 className="text-lg text-white font-mono">
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
                <CustomColorPicker />
              </div>

              <div className="text-meta-2 glass p-4 space-y-4">
                <InterfaceCustomize />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
