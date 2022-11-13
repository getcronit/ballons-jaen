import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react"
import { connectSection, Field } from "@jaenjs/jaen"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"

const BlogTagItem = connectSection(
  () => {
    return (
      <Tag variant="white">
        {<Field.Text name="tagText" defaultValue="Tag" />}
      </Tag>
    )
  },
  {
    name: "BlogTagItem",
    displayName: "Tag",
  }
)

export const BlogTags = () => {
  return (
    <Box minW="24">
      <Field.Section
        as={HStack}
        name="tags"
        displayName="Tags"
        sections={[BlogTagItem]}
      />
    </Box>
  )
}

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
          <Box borderRadius="1.875rem" boxShadow="dark" overflow={"hidden"}>
            <Field.Image
              name="image"
              defaultValue="/images/blog_page/hero_image.png"
            />
          </Box>

          <Flex justify="space-between" mt="8">
            <BlogTags />

            <Box>
              <Text size="b2012" textAlign="end">
              Von{" "}
                <Text as="span" size="b2012" fontWeight="bold" color="gray.700">
                  <Field.Text name="author" defaultValue="Max Mustermann" as="span" display={'inline-block'} />
                </Text>
              </Text>
              <Text size="b2012" textAlign="end">
                <Field.Text name="date" defaultValue="12.12.2020" />
              </Text>
            </Box>
          </Flex>

          <Flex justify="center">
            <Heading
              size="h4020"
              sx={{
                "i, em": {
                  fontSize: "60",
                },
              }}
            >
              <Field.Text
                name="title"
                rtf
                defaultValue="<p>Blog <i>Title</i></p>"
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
