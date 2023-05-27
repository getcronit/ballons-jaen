import { Box, Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Slider from 'react-slick';
import { CONTAINER_MAX_WIDTH } from '../../../constant/sizes';
import { customerSliderSettings } from '../../../constant/slider';

interface IOurCustomersProps {}

const OurCustomers: FC<IOurCustomersProps> = () => {
  const customers = [
    {
      id: 1,
      name: ' Lisa Doe',
      image: '/images/about_us/cardProfile1.png',
      feedback:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et doLorem ipsum dolor sit ajk.',
    },
    {
      id: 2,
      name: ' Josef Doe',
      image: '/images/about_us/cardProfile2.png',
      feedback:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et doLorem ipsum dolor sit ajk.',
    },
    {
      id: 3,
      name: ' Josef Doe',
      image: '/images/about_us/cardProfile2.png',
      feedback:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et doLorem ipsum dolor sit ajk.',
    },
    {
      id: 4,
      name: ' Josef Doe',
      image: '/images/about_us/cardProfile2.png',
      feedback:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et doLorem ipsum dolor sit ajk.',
    },
  ];

  return (
    <Box
      pos="relative"
      zIndex="2"
      pt="4"
      pb="32"
      bgImage="/images/about_us/thread_customer.svg"
      bgRepeat="no-repeat"
      bgPos="0  10rem"
      bgSize="contain">
      <Container maxW={CONTAINER_MAX_WIDTH} py="8">
        <Flex
          align={{ base: 'start', md: 'center', xl: 'center' }}
          flexDir={{ base: 'column', xl: 'row' }}>
          <Stack
            spacing="0"
            align={{ md: 'center', xl: 'start' }}
            textAlign={{ md: 'center', xl: 'start' }}>
            <Text fontSize={{ base: 'sm', md: 'lg' }} textTransform="uppercase">
              MEINUN
            </Text>
            <Flex gap={{ base: 2, md: 4 }}>
              <Heading size="h6020" as="span" fontWeight="semibold" whiteSpace="nowrap">
                Unserer
              </Heading>
              <Text mb="-6 !important" as="span" variant="cursive" size="80">
                Kunden
              </Text>
            </Flex>

            <Text size="b2012" variant="light" maxW={{ base: '80%', md: '90%' }}>
              Wir bauen auf die Emotionen und das Glück, welches wir bei jedem Event miterleben
              dürfen. Wir freuen uns jedes Mal aufs Neue über Lob und über die zufriedenen Gesichter
              beim Anblick unserer Dekoration.
            </Text>
          </Stack>

          <Box maxW={{ base: '100%', md: '47rem' }} my="8">
            <Slider {...customerSliderSettings} className="customer_slider">
              {customers.map((customer) => (
                <Box key={customer.id} py="4">
                  <Stack
                    mx={{ base: 2, md: 'auto' }}
                    px="6"
                    boxShadow="light"
                    borderRadius="xl"
                    maxW="21.875rem"
                    bg="white"
                    py="8">
                    <Flex gap="1">
                      <Box>
                        <Image src="/images/about_us/comma.svg" />
                      </Box>
                      <Box boxSize="180px" borderRadius="full">
                        <Image src={customer.image} w="100%" h="full" />
                      </Box>
                    </Flex>
                    <Stack spacing="0">
                      <Heading fontWeight="semibold" fontSize="lg">
                        {customer.name}
                      </Heading>
                      <Text fontSize="md">Customer</Text>
                      <Text size="b2012" variant="light">
                        {customer.feedback}
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </Slider>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
export default OurCustomers;
