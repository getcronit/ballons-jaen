import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import { Field, navigate } from "@jaenjs/jaen"
import { FC } from "react"
import { BiChevronRight } from "react-icons/bi"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"
import { BlogMeta } from "../BlogPage/BlogMeta"
import { BlogTags } from "../BlogPage/BlogTags"

interface IBlogCardProps {
  slug: string
}

const BlogCard: FC<IBlogCardProps> = ({ slug }) => {
  return (
    <Flex
      maxW={CONTAINER_MAX_WIDTH}
      borderRadius="xl"
      bg="white"
      boxShadow="dark"
      flexDir="column"
    >
      <Grid
        borderRadius="1.875rem"
        overflow="hidden"
        flex="1"
        maxH={{ base: "8.125rem", sm: "13.75rem", md: "37.5rem" }}
      >
        <Image src="/images/blog_overview/blogBanner.png" h="full" w="full" />
      </Grid>
      <Stack
        flex="1"
        gap={{ base: 2, md: 0 }}
        spacing="0"
        px={{ base: 4, md: 6 }}
        justify="center"
        py={{ base: 2, md: 0 }}
      >
        <BlogTags fieldName="tags" />
        <Heading size="h2418" noOfLines={1}>
          <Field.Text
            name="title"
            rtf
            defaultValue="<p>Ballons & Ballons: Die Geschichte</p>"
          />{" "}
        </Heading>
        <Text variant="light" size="b2012" noOfLines={3}>
          <Field.Text
            name="description"
            rtf
            noOfLines={3}
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
          <Button
            variant="link"
            rightIcon={
              <Grid
                placeItems="center"
                h={{ base: "4", lg: "6" }}
                w={{ base: "4", lg: "6" }}
                color="white"
                bg="red.500"
                fontSize={{ lg: "lg" }}
                borderRadius="full"
              >
                <BiChevronRight />
              </Grid>
            }
            onClick={() => {
              navigate(`/news/${slug}`)
            }}
          >
            Weiterlesen
          </Button>

          <BlogMeta />
        </Flex>
      </Stack>
    </Flex>
  )
}
export default BlogCard
