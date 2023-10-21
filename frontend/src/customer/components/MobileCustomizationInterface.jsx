import { Box, Flex, Heading, IconButton, Stack, Text } from '@chakra-ui/react';
import { useContext, useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CustomColorPicker from '../components/CustomColorPicker';
import SizeCustomizer from '../components/SizeCustomizer';
import { CustomizationContext } from '../layout/CustomizationContex';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

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
  });

  return (
    <>
      <Box
        style={{ position: 'absolute', top: 0, right: '1%' }}
        ml={4}
        width="250px"
        className="headingGlass text-meta-2"
        mt={2}
        px={2}
      >
        <Flex justify="space-between" mt={2}>
          <Text p={2}>Shoe Configurator</Text>
          {isOpenModal ? (
            <IconButton
              variant="outline"
              colorScheme="whiteAlpha"
              aria-label="Collapse menu"
              onClick={() => setIsOpenModal(!isOpenModal)}
              icon={<ChevronUpIcon />}
            />
          ) : null}
        </Flex>
        <Heading
          as="h1"
          size="lg"
          p={2}
          style={{ fontFamily: 'Noto Sans Mono' }}
          mb={2}
        >
          {customization.layerName
            ? customization.layerName
            : 'Click on a layer to start editing!'}
        </Heading>
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          margin: 'auto',
        }}
        p={3}
        ml={3}
        width="310px"
      >
        {isOpenModal ? (
          <div ref={myRef} onClick={handleClickInside}>
            <Carousel className="glass text-meta-2" swipeable={false} showThumbs={false}>
              <Stack p={8} spacing="12px">
                <Heading as="h3" size="sm" py={2}>
                  Layer color
                </Heading>
                <CustomColorPicker />
              </Stack>
              <Stack p={8} spacing="12px">
                <Heading as="h3" size="sm" py={2}>
                  Layer size
                </Heading>
                <SizeCustomizer />
              </Stack>
            </Carousel>
          </div>
        ) : null}
      </Box>
    </>
  );
}
