import React from 'react';
import { Box, Flex, Heading, IconButton, Stack, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import { CustomizationContext } from '../layout/CustomizationContex';
import CustomColorPicker from './CustomColorPicker.jsx';
import SizeCustomizer from './SizeCustomizer.jsx';
import { ChevronUpIcon } from '@heroicons/react/24/outline';



export default function CustomizationInterface() {
  const { isOpenModal, customization, setIsOpenModal } =
    useContext(CustomizationContext);

  const heightSideBar = window.innerHeight > 909 ? 'auto' : '80vh';
  const overflowYSideBar = window.innerHeight > 909 ? 'hidden' : 'scroll';

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <Box
      style={{ position: 'absolute', top: 0, right: '1%' }}
      p={3}
      ml={3}
      width="310px"
    >
      <Box className="headingGlass text-meta-2" mb={4} p={4}>
        <Flex justify="space-between">
          <Text p={2}>Shoe Configurator</Text>
          {isOpenModal && (
            <IconButton
              variant="outline"
              colorScheme="whiteAlpha"
              aria-label="Collapse menu"
              onClick={toggleModal}
              icon={<ChevronUpIcon />}
            />
          )}
        </Flex>
        <Heading
          as="h1"
          size="lg"
          p={2}
          style={{ fontFamily: 'Noto Sans Mono' }}
        >
          {customization.layerName || 'Click on a layer to start editing!'}
        </Heading>
      </Box>
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
            <Stack spacing="4">
              <Stack className="text-meta-2 glass" p={8} width="290px" spacing="12px">
                <Heading as="h3" size="sm" py={2}>
                  Layer color
                </Heading>
                <CustomColorPicker />
              </Stack>

              <Stack className=" text-meta-2 glass" p={8} width="290px" spacing="12px">
                <Heading as="h3" size="sm" py={2}>
                  Layer size
                </Heading>
                <SizeCustomizer />
              </Stack>
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
