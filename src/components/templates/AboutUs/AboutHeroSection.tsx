import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

import { FC } from 'react';
import { CONTAINER_MAX_WIDTH } from '../../../constant/sizes';

interface IAboutHeroSectionProps {}

const AboutHeroSection: FC<IAboutHeroSectionProps> = () => {
  return (
    <Box
      bgRepeat="no-repeat"
      py="5rem"
      bgPos={{
        base: '0 15rem,5rem 8rem',
        md: '0 10rem,10rem',
        xl: '0 10rem,20rem',
        '2xl': '0 5rem,40rem 5rem',
      }}
      bgSize={{ base: '120%', md: 'full,auto' }}
      bgImage="url('/images/about_us/redline1.svg'),url('/images/about_us/hero_bg_big.svg')">
      <Container
        alignItems={{ base: 'center', lg: 'center' }}
        justifyContent="space-between"
        flexDir={{ base: 'column', md: 'row' }}
        pos="relative"
        top={{ base: '-18.75rem', md: '0' }}
        mb={{ base: '-18.75rem', md: '5rem' }}
        py="8"
        as={Flex}
        gap="8"
        maxW={CONTAINER_MAX_WIDTH}>
        <Box flex="1">
          <Image
            borderRadius="xl"
            boxShadow="dark"
            mx="auto"
            src="/images/about_us/hero_image.png"
          />
        </Box>
        <Box flex="1">
          <Stack
            align={{ base: 'center', md: 'start' }}
            textAlign={{ base: 'center', md: 'start' }}>
            <Flex gap={{ base: 2, md: 4 }}>
              <Heading size="h5020" as="span" fontWeight="semibold" whiteSpace="nowrap">
                Freude liegt in der
              </Heading>
              <Text mb="-6 !important" as="span" variant="cursive" size="80">
                Luft
              </Text>
            </Flex>

            <Text size="b2012" variant="light" maxW={{ base: '80%', md: '90%' }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et do
            </Text>

            <Box>
              <Button
                mt="4"
                size={{ base: 'sm', md: 'md' }}
                display={{ base: 'none', md: 'inline-flex' }}>
                Persönliche Beratung anfragen
              </Button>
              <Button
                mt="4"
                size={{ base: 'sm', md: 'md' }}
                display={{ base: 'inline-flex', md: 'none' }}>
                Beraten lassen
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>

      {/* <Container maxW={CONTAINER_MAX_WIDTH}>
        <AspectRatio ratio={16 / 9} display={{ base: 'none', md: 'block' }}>
          <Image
            boxShadow="dark"
            borderRadius="xl"
            mx="auto"
            w={{ base: '80%', sm: '80%', md: '25rem', lg: 'auto' }}
            src="/images/about_us/hero_video_image.png"
          />
        </AspectRatio>
        <AspectRatio ratio={350 / 500} display={{ base: 'block', md: 'none' }}>
          <Image
            boxShadow="dark"
            borderRadius="xl"
            mx="auto"
            w={{ base: '80%', sm: '80%', md: '25rem', lg: 'auto' }}
            src="/images/about_us/hero_video_image.png"
          />
        </AspectRatio>
      </Container> */}
    </Box>
  );
};
export default AboutHeroSection;
