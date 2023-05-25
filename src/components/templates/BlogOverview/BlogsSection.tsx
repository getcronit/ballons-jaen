import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Heading,
  VStack
} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import React, {FC} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {JaenPageIndexType} from '../../../types/commonTypes'
import BlogCard from './BlogCard'

interface IBlogsSectionProps {
  blogs: JaenPageIndexType['children']
  withJaenPage: JaenPageIndexType['withJaenPage']
}

const MAX_LOADED_BLOGS = 3

const BlogsSection: FC<IBlogsSectionProps> = props => {
  const [maxLoadedBlogs, setMaxLoadedBlogs] = React.useState(
    MAX_LOADED_BLOGS < props.blogs.length
      ? MAX_LOADED_BLOGS
      : props.blogs.length
  )

  const loadMoreBlogs = () => {
    const newMaxLoadedBlogs = maxLoadedBlogs + MAX_LOADED_BLOGS

    // check for overflow
    if (newMaxLoadedBlogs > props.blogs.length) {
      setMaxLoadedBlogs(props.blogs.length)
    } else {
      setMaxLoadedBlogs(newMaxLoadedBlogs)
    }
  }

  if (props.blogs.length === 0) {
    return (
      <Box my="64">
        <Heading as="h2" size="lg" textAlign="center" mb={4}>
          Derzeit sind keine News verfügbar.
        </Heading>
      </Box>
    )
  }

  return (
    <>
      <Container maxW={CONTAINER_MAX_WIDTH} mt={{base: '-16', md: '16'}}>
          <Field.Text
            as={Heading}
            fontWeight="semibold"
            size="h4020"
            name="title"
            defaultValue="Weitere Beiträge"
          />
        <Divider mb="8" mt="4" bg="red.500" h="1px" border="0" />
      </Container>
      <Box
        bgImage="/images/blog_overview/blog_shape.svg"
        bgPos="right -20rem bottom 20rem"
        bgSize="60%"
        bgRepeat="no-repeat">
        <Container maxW={CONTAINER_MAX_WIDTH}>
          <Grid
            gridTemplateColumns={{md: 'repeat(2,1fr)', xl: 'repeat(3,1fr)'}}
            gap={{base: '4', md: 6, xl: '8'}}
            rowGap={{base: '6', md: 12, xl: '16'}}>
            {Array.from({length: maxLoadedBlogs}).map((_, index) => {
              const blog = props.blogs[index]

              if (!blog) {
                console.error('Blog not found')
              }

              return props.withJaenPage(
                blog.id,
                <BlogCard key={blog.id} slug={blog.slug!} />
              )
            })}
          </Grid>
          <VStack>
            <Button
              display={maxLoadedBlogs < props.blogs.length ? 'flex' : 'none'}
              size={{base: 'sm', md: 'md'}}
              mt="16"
              variant="outline"
              onClick={loadMoreBlogs}>
              Mehr Artikel anzeigen
            </Button>
          </VStack>
        </Container>
      </Box>
    </>
  )
}
export default BlogsSection
