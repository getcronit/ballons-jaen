import {Field} from '@atsnek/jaen'
import {
  chakra,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import {Link} from 'gatsby'
import {FC} from 'react'
import Slider from 'react-slick'
import {today} from '../../../common/utils'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {useNewsPages} from '../../hooks/useNewsPages'
import {BallonButton} from '../../molecules/BallonButton'
import TopShape from '../../../common/assets/shapes/top_shape.inline.svg'

interface INewsSliderProps {
  showNewsTitle?: boolean
}

const NewsSlider: FC<INewsSliderProps> = ({showNewsTitle = false}) => {
  const index = useNewsPages()

  var settings = {
    dots: true,
    infinite: index.childPages.length > 2,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      // Set for large screens
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: index.childPages.length > 1,
          dots: true,
          arrows: false
        }
      },
      // Set for medium screens
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: index.childPages.length > 1,
          dots: true,
          arrows: false
        }
      },
      // Set for small screens
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: index.childPages.length > 1,
          dots: true,
          arrows: false
        }
      }
    ]
  }

  return (
    <Box
      bg="#f6f8fa"
      // zIndex="-1"
      overflow="hidden"
      pos="relative"
      px={{base: '0', md: '16'}}
      py={{base: '16', md: '50', lg: 20}}>
      <chakra.svg
        as={TopShape}
        borderBottom="solid white"
        borderBottomWidth={256}
        // zIndex="-1"
        position="absolute"
        top={'0'}
        left={'0'}
        transform={'scaley(-1)'}
        w="100%"
        h="auto"
      />
      {showNewsTitle && (
        <Text pl="8" variant="cursive" fontSize="xl">
          Wissen
        </Text>
      )}

      <Container maxW={CONTAINER_MAX_WIDTH} pos="relative" zIndex={1}>
        {showNewsTitle && (
          <Text
            variant="cursive"
            fontSize={{base: '2xl', md: '4xl', lg: '5xl', xl: '6xl'}}>
            Wissen
          </Text>
        )}

        <Box
          borderRadius={{base: 'md', md: 'lg', lg: 'xl'}}
          boxShadow="dark"
          py="8"
          bg="white">
          <Slider {...settings}>
            {index.childPages.map((page, i) =>
              index.withJaenPage(
                page.id,
                <Flex
                  key={i}
                  py="8"
                  pb="8"
                  flex="1"
                  px="4"
                  align="center"
                  gap="6"
                  justify="center"
                  flexDir={{base: 'column', md: 'row'}}>
                  <Box
                    boxShadow="light"
                    overflow="hidden"
                    boxSize="48"
                    bg="gray.800"
                    borderRadius="full">
                    <Field.Image name="image" />
                  </Box>
                  <Stack gap="4" flex="1" w="full">
                    <Text fontSize={'md'}>
                      {page.jaenPageMetadata?.blogPost?.date
                        ? new Date(
                            page.jaenPageMetadata.blogPost.date
                          ).toLocaleDateString('de-DE', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })
                        : today()}
                    </Text>
                    <Field.Text
                      as={Heading}
                      color="black.500"
                      fontSize={{md: 'sm', lg: 'md', xl: 'xl'}}
                      fontWeight="semibold"
                      noOfLines={2}
                      name="title"
                      defaultValue="Ballons & Ballons: Die Geschichte"
                      isRTF={false}
                    />
                    <Field.Text
                      style={{
                        textAlign: 'left'
                      }}
                      fontSize={{md: 'xs', lg: 'sm', xl: 'md'}}
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
                      mx="auto"
                      variant="outline"
                      as={Link}
                      to={`/wissen/${page.slug}`}
                      size="md"
                      py="7 !important">
                      Mehr anzeigen
                    </BallonButton>
                  </Stack>
                </Flex>
              )
            )}
          </Slider>
        </Box>
      </Container>
    </Box>
  )
}
export default NewsSlider
