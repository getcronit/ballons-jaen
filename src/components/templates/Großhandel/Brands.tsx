import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import {connectBlock, Field} from '@snek-at/jaen'
import {FC} from 'react'
import Slider from 'react-slick'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {brandSettings} from '../../../constant/slider'

interface IBrandsProps {}

const Brands: FC<IBrandsProps> = () => {
  return (
    <HStack
      pos="relative"
      justify="center"
      align="end"
      h={{base: '800px', md: '1100px', lg: '1400px', '2xl': '1500px'}}
      overflow="hidden"
      bg={"white"}
    >
      {/* <Image
        pos="absolute"
        src="/images/großhandel/logo2_bg.svg"
        w="full"
        objectFit="cover"
        top="0"
        h="full"
      /> */}
      <VStack
        maxW={CONTAINER_MAX_WIDTH}
        mx="auto"
        pos="relative"
        h="full"
        pb={{base: '24', md: '60'}}
        justify="start"
        top="350px">
        <Heading mb="8" fontSize={{base: 'md', lg: 'xl'}}>
          <Field.Text
            name="title"
            label="Titel"
            defaultValue={'<p>Wir sind Distributor von</p>'}
          />
        </Heading>
        <Box w="full">
          <Field.Section
            as={Stack}
            props={{
              pt: 8,
              spacing: 8
            }}
            sectionProps={{
              pt: 8
            }}
            name="brands"
            label="Unsere Partner"
            blocks={[BrandsSection]}
          />
        </Box>
      </VStack>
    </HStack>
  )
}
export default Brands

export const BrandsSection = connectBlock(
  () => {
    return (
      <>
        <VStack>
          <Flex gap={{base: 2, md: 4}}>
            <Heading size="h5020" as="span" fontWeight="semibold">
              <Field.Text
                rtf
                name="partnerTitle"
                label="Titel"
                defaultValue="<p>Ein <i>Partner</i></p>"
              />
            </Heading>
          </Flex>
          <Text
            size="b2412"
            maxW="60%"
            mb="4 !important"
            textAlign="center"
            as="span">
            <Field.Text
              rtf
              name="partnerText"
              label="Text"
              defaultValue={
                '<p>Profitieren Sie von einer unglaublichen Auswahl an Ideen, Produkten und Business-Boostern in unserem Netzwerk.</p>'
              }
            />
          </Text>

          <Box w="full">
            <Field.Section
              as={Slider}
              props={{...brandSettings}}
              name="partnerSlider"
              label="Partner Logos"
              blocks={[BrandsLogoSection]}
            />
          </Box>
        </VStack>
      </>
    )
  },
  {
    name: 'BrandsSection',
    label: 'Partner'
  }
)

const BrandsLogoSection = connectBlock(
  () => {
    return (
      <Box boxSize={'full'} display={'flex'} justifyContent="center">
        <Box
          boxSize={{base: '10rem', sm: '12rem', lg: '15rem'}}
          borderRadius="xl"
          overflow="hidden">
          <Field.Image
            name="partnerLogo"
            label="Logo"
            //defaultValue="/images/großhandel/distributors/dist1.png"
          />
        </Box>
      </Box>
    )
  },
  {
    name: 'BrandsLogoSection',
    label: 'Partner Logo'
  }
)
