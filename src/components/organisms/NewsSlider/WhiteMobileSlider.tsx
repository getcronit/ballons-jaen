import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import {Link} from 'gatsby'
import {FC} from 'react'
import Slider from 'react-slick'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {JaenPageIndexType} from '../../../types/commonTypes'

interface IWhiteMobileSliderProps {
  index: JaenPageIndexType
}

const WhiteMobileSlider: FC<IWhiteMobileSliderProps> = ({index}) => {

  const slidesToShow = 1

  var settings = {
    dots: true,
    infinite: index.children.length > slidesToShow,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1
  }

  return (
    <Container maxW={CONTAINER_MAX_WIDTH}>
      <Slider {...settings} className="white_slider">
        {index.children.map((page, i) => {
          return index.withJaenPage(
            page.id,
            <Box key={i}>
              <Stack
                mx="4"
                mt="24"
                mb="8"
                borderRadius="md"
                boxShadow="dark"
                py="8"
                pb="16"
                px="8"
                bg="white"
                flex="1"
                pt="20"
                align="center"
                justify="center">
                <Grid flex="1" placeItems="center" pos="relative" bg="red">
                  <Box
                    pos="absolute"
                    top="-40"
                    overflow="hidden"
                    boxSize={{base: '9.375rem'}}
                    bg="gray.800"
                    borderRadius="full">
                    <Field.Image
                      name="image"
                      label="Image"
                      defaultValue="/images/blog_page/hero_image.png"
                    />
                  </Box>
                </Grid>
                <VStack gap="0" flex="1" textAlign="center">
                  <Text fontSize="sm" color="gray.700" as="span">
                    <Field.Text
                      name="date"
                      label="Datum"
                      defaultValue="12.12.2020"
                    />
                  </Text>
                  <Heading
                    color="black.500"
                    fontSize="md"
                    fontWeight="semibold"
                    noOfLines={2}>
                    <Field.Text
                      name="title"
                      label="Titel"
                      defaultValue="Ballons & Ballons: Die Geschichte"
                    />
                  </Heading>
                  <Text color="black.500" fontSize="sm" as="span" noOfLines={4}>
                    <Field.Text
                      name="description"
                      label="Beschreibung"
                      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
                        libero risus semper Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Faucibus in libero risus
                        semper Lorem ipsum dolor sit amet, cipiscing elit. Faucibus in
                        libero risus semper Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
                        sit amet, consectetur adipiscing "
                    />
                  </Text>
                  <Button
                    as={Link}
                    to={`/news/${page.slug}`}
                    size={{base: 'sm', md: 'md'}}
                    variant="outline">
                    Mehr anzeigen
                  </Button>
                </VStack>
              </Stack>
            </Box>
          )
        })}
      </Slider>
    </Container>
  )
}
export default WhiteMobileSlider
