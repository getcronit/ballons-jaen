import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { Field, navigate } from "@jaenjs/jaen"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"
import { JaenPageIndexType } from "../../../types/commonTypes"
import { BlogMeta } from "../BlogPage/BlogMeta"
import { BlogTags } from "../BlogPage/BlogTags"

const FeaturedBlog: React.FC<{
  featuredBlog: JaenPageIndexType["children"][number]
  withJaenPage: JaenPageIndexType["withJaenPage"]
}> = props => {
  return (
    <>
      {props.withJaenPage(
        props.featuredBlog.id,
        <Flex
          maxW={CONTAINER_MAX_WIDTH}
          borderRadius="xl"
          bg="white"
          boxShadow="dark"
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <Box
            borderRadius="xl"
            overflow="hidden"
            flex="1"
            maxH={{
              base: "200px",
              sm: "300px",
              md: "600px",
            }}
          >
            <Field.Image
              name="heroImage"
              defaultValue="/images/blog_overview/blogHero.png"
            />
          </Box>
          <Stack
            flex="1"
            gap={{
              base: 2,
              md: 0,
            }}
            spacing="0"
            px={{
              base: 4,
              md: 6,
              xl: 10,
            }}
            justify="center"
            py="6"
          >
            <BlogTags fieldName="tags" />

            <Heading size="h3015">
              <Field.Text
                name="title"
                rtf
                defaultValue="<p>Ballons & Ballons: Die Geschichte</p>"
              />
            </Heading>
            <Text variant="light" size="b2012" as="span">
              <Field.Text
                name="description"
                rtf
                noOfLines={6}
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
            <Flex justify="space-between" w="full" mt="4 !important">
              <Box>
                <Button
                  variant="outline"
                  size={{
                    base: "sm",
                    lg: "md",
                  }}
                  onClick={() => {
                    navigate(`/news/${props.featuredBlog.slug}`)
                  }}
                >
                  Weiterlesen
                </Button>
              </Box>
              <BlogMeta />
            </Flex>
          </Stack>
        </Flex>
      )}
    </>
  )
}

interface IBlogOverviewHeroProps {
  featuredBlog?: JaenPageIndexType["children"][number]
  withJaenPage: JaenPageIndexType["withJaenPage"]
}

const BlogOverviewHero: FC<IBlogOverviewHeroProps> = props => {
  return (
    <Box
      bgImage={{
        base: "/images/blog_overview/mobile_hero_bg.svg",
        md: "/images/blog_overview/hero_bg.svg",
      }}
      pt={{ base: 4, md: 32 }}
      pb="32"
      bgPos={{ base: "top 2rem left 0" }}
      bgRepeat="no-repeat"
      bgSize={{ base: "contain", md: "cover" }}
    >
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <VStack>
          <Heading
            mb={{ base: "25%", md: "5%" }}
            size="h6020"
            as="span"
            fontWeight="semibold"
            whiteSpace="nowrap"
          >
            <Field.Text
              rtf
              name="heroTitle"
              defaultValue="<p>Wissenswertes über Ballons & Ballons</p>"
            />
          </Heading>
        </VStack>
        {props.featuredBlog ? (
          <FeaturedBlog
            featuredBlog={props.featuredBlog}
            withJaenPage={props.withJaenPage}
          />
        ) : (
          <Box my="64" />
        )}
      </Container>
    </Box>
  )
}
export default BlogOverviewHero
