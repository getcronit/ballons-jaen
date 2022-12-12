import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { Field } from "@jaenjs/jaen"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"
import { BlogMeta } from "./BlogMeta"
import { BlogTags } from "./BlogTags"

interface IBlogPageHeroProps {}

const BlogPageHero: FC<IBlogPageHeroProps> = () => {
  return (
    <Box
      bgImage={{
        base: 'url("/images/blog_page/hero_bg_mobile.svg")',
        md: "/images/blog_overview/hero_bg.svg",
      }}
      pt={{ base: 4, md: 32 }}
      pb={{ base: 16, md: 32 }}
      bgPos={{ base: "top", md: "top 2rem left 0" }}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Container
        maxW={CONTAINER_MAX_WIDTH}
        as={Stack}
        gap={{ base: 4, lg: "8" }}
      >
        <Box pos="relative" top={{ base: "-40px", md: 0 }}>
          <Box borderRadius="1.875rem" boxShadow="dark" overflow={"hidden"} h={{ base: "30vh", "xl": "50vh" }}>
            <Field.Image
              name="image"
              defaultValue="/images/blog_page/hero_image.png"
            />
          </Box>

          <Flex justify="space-between" mt="8">
            <BlogTags fieldName="tags" />
            <BlogMeta />
          </Flex>

          <Flex justify="center">
            <Heading size="h4020">
              <Field.Text
                name="title"
                rtf
                defaultValue="<p>Ballons & Ballons: Die Geschichte</p>"
              />
            </Heading>
          </Flex>
        </Box>
        <Stack
          pos="relative"
          top={{ base: "40px", md: 0 }}
          gap={{ base: 4, lg: "8" }}
        >
          <Text size="b2012" as="span">
            <Field.Text
              name="description"
              rtf
              defaultValue={`
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
              libero risus semper Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Faucibus in libero risus
              semper Lorem ipsum dolor sit amet, cipiscing elit. Faucibus in
              libero risus semper Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Faucibus in libero risus
              semper Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Faucibus in libero risus semper Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Faucibus in libero risus semper Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
              libero risus semper
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
              libero risus semper Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Faucibus in libero risus
              semper Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Faucibus in libero risus semper
              </p>
            `}
            />
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}
export default BlogPageHero
