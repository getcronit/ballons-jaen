import {
  Box,
  Container,
  Grid,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { Field } from "@jaenjs/jaen"
import { StaticImage } from "gatsby-plugin-image"
import { FC } from "react"
import { TransparentCard } from "../../../../chakra/TransparentCard"
import LinkButtonField from "../../../fields/LinkButtonField"
import HeartRightSection from "./HeartRightSection"

interface IHeartSectionProps {}

const HeartSection: FC<IHeartSectionProps> = () => {
  return (
    <Grid h={{ base: "33.75rem", sm: "auto" }}>
      <StaticImage
        objectPosition={"top left"}
        style={{
          gridArea: "1/1",
        }}
        imgStyle={{ objectPosition: "top" }}
        layout="fullWidth"
        alt="Herzballons gebunden an ein Paket"
        src={"./bg.jpg"}
        formats={["auto", "webp", "avif"]}
      />

      <Box
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}
      >
        <Container
          p="10"
          maxW="80rem"
          display="flex"
          justifyContent="space-between"
          flexDirection={{ base: "column", lg: "row" }}
          alignItems="center"
          color="white"
          px="8"
        >
          <Stack
            p="8"
            spacing="4"
            as={TransparentCard}
            h={{ base: "21.25rem", md: "auto", lg: "auto" }}
            w={{ base: "19.375rem", sm: "100%", lg: "38.125rem" }}
          >
            <Text fontSize={{ base: "sm", lg: "xl" }} as="span">
              <Field.Text name="tag" defaultValue="Inspiration" />
            </Text>
            <Heading fontSize={{ base: "md", lg: "4xl" }} fontWeight="800">
              <Field.Text
                name="heading"
                defaultValue="Lass dich von uns inspirieren"
              />
            </Heading>
            <Text
              fontSize={{ base: "xs", lg: "md" }}
              mb="2 !important"
              as="span"
            >
              <Field.Text
                name="text"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate."
              />
            </Text>
            <Box display="flex">
              <LinkButtonField
                name="heartButton"
                defaultValue="Mehr erfahren"
                defaultUrl={`/dekoration`}
                size={{ base: "sm", lg: "md" }}
                w="12.5rem"
              />
            </Box>
          </Stack>
          <Box
            pb={{ base: 32, md: 0 }}
            display={{ base: "none", sm: "block" }}
            w={{ base: "100%", lg: "auto" }}
          >
            <HeartRightSection />
          </Box>
        </Container>
      </Box>
    </Grid>
  )

  return (
    <Box>
      <Box
        h={{ base: "33.75rem", sm: "auto" }}
        bgImage={{
          base: "url(/images/home/heart/heart_mobile_bg.png)",
          sm: "url(/images/home/heart/heart_bg.png)",
        }}
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
      >
        <Container
          p="10"
          maxW="80rem"
          display="flex"
          justifyContent="space-between"
          flexDirection={{ base: "column", lg: "row" }}
          alignItems="center"
          color="white"
          px="8"
        >
          <Stack
            p="8"
            spacing="4"
            as={TransparentCard}
            h={{ base: "21.25rem", md: "auto", lg: "auto" }}
            w={{ base: "19.375rem", sm: "100%", lg: "38.125rem" }}
          >
            <Text fontSize={{ base: "sm", lg: "xl" }} as="span">
              <Field.Text name="tag" defaultValue="Inspiration" />
            </Text>
            <Heading fontSize={{ base: "md", lg: "4xl" }} fontWeight="800">
              <Field.Text
                name="heading"
                defaultValue="Lass dich von uns inspirieren"
              />
            </Heading>
            <Text
              fontSize={{ base: "xs", lg: "md" }}
              mb="2 !important"
              as="span"
            >
              <Field.Text
                name="text"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate."
              />
            </Text>
            <Box display="flex">
              <LinkButtonField
                name="heartButton"
                defaultValue="Mehr erfahren"
                defaultUrl={`/dekoration`}
                size={{ base: "sm", lg: "md" }}
                w="12.5rem"
              />
            </Box>
          </Stack>
          <Box
            pb={{ base: 32, md: 0 }}
            display={{ base: "none", sm: "block" }}
            w={{ base: "100%", lg: "auto" }}
          >
            <HeartRightSection />
          </Box>
        </Container>
      </Box>
      <Box
        mt="-8"
        bgImage={`url(/images/home/heart/heartbackground2.png)`}
        bgSize="cover"
        bgPos="center"
        pos="relative"
        bgRepeat="no-repeat"
        pb="20"
        display={{ base: "block", sm: "none" }}
        w={{ base: "100%", lg: "auto" }}
        bg="green"
      >
        <Box top="-24" pos="relative">
          <HeartRightSection />
        </Box>
      </Box>
    </Box>
  )
}
export default HeartSection
