import { Box, Container, Flex, Image, Stack } from "@chakra-ui/react"
import LongCardImageBackground from "../../LongCardImageBackground"

import { FC, Fragment } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"
import { connectSection, Field, navigate } from "@jaenjs/jaen"
import { useContentPages } from "../../hooks/useContentPages"

interface IAboutBallonsProps {}

const AboutBallons: FC<IAboutBallonsProps> = () => {
  const cards = [
    {
      heading: "Shop",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do",
      image: "/images/about_us/longCard1.png",
    },
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do",
      heading: "Großhandel",
      image: "/images/about_us/longCard2.png",
    },
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do",
      heading: "Dekoration",
      image: "/images/about_us/longCard3.png",
    },
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do",
      heading: "Party",
      image: "/images/about_us/longCard4.png",
    },
  ]

  const index = useContentPages()

  return (
    <Box
      bgImage="/images/about_us/ballon_bg.svg"
      bgRepeat="no-repeat"
      pt="10rem"
      pb="2rem"
      bgPos={{ base: "center", md: "unset" }}
      bgSize="cover"
    >
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <Flex
          align="center"
          gap="4"
          direction={{ base: "column", md: "row" }}
          pos="relative"
        >
          <Box
            pos={{ base: "absolute", md: "unset" }}
            w="50%"
            left="-3.125rem"
            top="-11.25rem"
          >
            <Field.Image
              name="aboutUsBallonsLeft"
              defaultValue="/images/about_us/ballon_bag.png"
            />
          </Box>

          <Stack
            spacing="4"
            pos="relative"
            w={{
              base: "100%",
              md: "50%",
            }}
          >
            {index.children.map((card, i) =>
              index.withJaenPage(
                card.id,
                <Fragment key={card.title}>
                  <LongCardImageBackground
                    onClick={() => navigate(`/${card.slug}/`)}
                    isSmallText
                    h="10rem"
                    card={{
                      headingFieldName: `riesgesCardheading${i}`,
                      headingDefaultValue: cards[i].heading,
                      textFieldName: `riesgesCardText${i}`,
                      textDefaultValue: cards[i].text,
                      imageFieldName: `riesgesCardImage${i}`,
                      imageDefaultValue: cards[i].image,
                    }}
                  />
                </Fragment>
              )
            )}
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}
export default AboutBallons
