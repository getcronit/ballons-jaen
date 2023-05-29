import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import {Link} from 'gatsby'
import {FC} from 'react'
import Slider from 'react-slick'
import {today} from '../../../common/utils'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {JaenPageIndexType} from '../../../types/commonTypes'

interface IWhiteDesktopSliderProps {
  showTitle?: boolean
  index: JaenPageIndexType
}

const WhiteDesktopSlider: FC<IWhiteDesktopSliderProps> = ({
  showTitle = false,
  index
}) => {
  const slidesToShow = 2

  var settings = {
    dots: true,
    infinite: index.children.length > slidesToShow,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1
  }

  return (
    <Container maxW={CONTAINER_MAX_WIDTH} display={{base: 'none', md: 'block'}}>
      {showTitle && (
        <Text
          variant="cursive"
          fontSize={{base: '2xl', md: '4xl', lg: '5xl', xl: '6xl'}}>
          News
        </Text>
      )}

      <Box
        borderRadius={{base: 'md', md: 'lg', lg: 'xl'}}
        boxShadow="dark"
        py="8"
        bg="white">
        <Slider {...settings} className="white_slider">
          {index.children.map((page, i) =>
            index.withJaenPage(
              page.id,
              <Box key={i} py="8">
                <Flex
                  h={{xl: '22.5rem'}}
                  pb="8"
                  flex="1"
                  px={{base: 0, lg: '4'}}
                  align="center"
                  gap="6"
                  justify="center"
                  flexDir={{base: 'column', md: 'row'}}>
                  <Box
                    boxShadow="light"
                    overflow="hidden"
                    boxSize={{md: '8rem', lg: '12rem', xl: '14.375rem'}}
                    bg="gray.800"
                    borderRadius="full">
                    <Field.Image name="image" />
                  </Box>
                  <Stack gap={{md: 0, lg: 2, xl: 4}} flex="1">
                    <Field.Text
                      fontSize={'md'}
                      name="date"
                      defaultValue={today()}
                    />
                    <Field.Text
                      as={Heading}
                      color="black.500"
                      fontSize={{md: 'sm', lg: 'md', xl: 'xl'}}
                      fontWeight="semibold"
                      noOfLines={2}
                      name="title"
                      defaultValue="Ballons & Ballons: Die Geschichte"
                    />
                    <Field.RichText
                      fontSize={{md: 'xs', lg: 'sm', xl: 'md'}}
                      noOfLines={4}
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
                    <Box>
                      <Button
                        variant="outline"
                        as={Link}
                        to={`/news/${page.slug}`}
                        size={{md: 'sm', lg: 'sm', xl: 'md'}}>
                        Mehr anzeigen
                      </Button>
                    </Box>
                  </Stack>
                </Flex>
              </Box>
            )
          )}
        </Slider>
      </Box>
    </Container>
  )
}
export default WhiteDesktopSlider
