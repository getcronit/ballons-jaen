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
import {BallonButton} from '../../molecules/BallonButton'
import {Field, useContentManagement} from '@atsnek/jaen'
import {Link} from 'gatsby'
import {FC} from 'react'
import Slider from 'react-slick'
import {today} from '../../../common/utils'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {JaenPageIndexType} from '../../../types/commonTypes'

interface IWhiteMobileSliderProps {
  index: JaenPageIndexType
}

const WhiteMobileSlider: FC<IWhiteMobileSliderProps> = ({index}) => {
  const slidesToShow = 1

  var settings = {
    dots: true,
    infinite: index.childPages.length > slidesToShow,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1
  }

  const {isEditing} = useContentManagement()

  return (
    <Container maxW={CONTAINER_MAX_WIDTH} overflow="hidden" pos='relative' zIndex='1'>
      <Slider {...settings} className="white_slider">
        {index.childPages.map((page, i) => {
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
                    <Field.Image name="image" />
                  </Box>
                </Grid>
                <VStack gap="0" flex="1" textAlign="center">
                  <Field.Text
                    fontSize="sm"
                    color="gray.700"
                    name="date"
                    defaultValue={today()}
                  />
                  <Field.Text
                    as={Heading}
                    color="black.500"
                    fontSize="md"
                    fontWeight="semibold"
                    noOfLines={2}
                    name="title"
                    defaultValue="Ballons & Ballons: Die Geschichte"
                    isRTF={false}
                  />
                  <Field.Text
                    color="black.500"
                    fontSize="sm"
                    pointerEvents={isEditing ? 'none' : 'auto'}
                    noOfLines={4}
                    isDisabled={true}
                    isRTF={false}
                    name="description"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
                        libero risus semper Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Faucibus in libero risus
                        semper Lorem ipsum dolor sit amet, cipiscing elit. Faucibus in
                        libero risus semper Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
                        sit amet, consectetur adipiscing "
                  />
                  <BallonButton
                    as={Link}
                    to={`/wissen/${page.slug}`}
                    size={{base: 'sm', md: 'md'}}
                    variant="outline">
                    Mehr anzeigen
                  </BallonButton>
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
