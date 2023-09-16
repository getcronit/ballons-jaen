import {Box, Container, Image} from '@chakra-ui/react'
import React, {FC} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {JaenPageIndexType} from '../../../types/commonTypes'
import {useNewsPages} from '../../hooks/useNewsPages'
import HorizontalImageCard from '../../organisms/HorizontalImageCard'
import BlogOverviewHero from './BlogOverviewHero'
import BlogsSection from './BlogsSection'

interface IBlogOverviewProps {}

const BlogOverview: FC<IBlogOverviewProps> = () => {
  const index = useNewsPages({unlimited: true})

  const featuredBlog = React.useMemo(() => {
    let latestBlog: JaenPageIndexType['childPages'][number] | undefined =
      undefined

    for (const child of index.children) {
      if (!latestBlog) {
        latestBlog = child
      } else {
        const latestBlogDate = new Date(
          latestBlog.jaenPageMetadata?.blogPost?.date || ''
        )
        const childDate = new Date(child.jaenPageMetadata?.blogPost?.date || '')

        if (childDate > latestBlogDate) {
          latestBlog = child
        }
      }
    }

    return latestBlog
  }, [index.children])

  const moreBlogs = React.useMemo(() => {
    // remove featured blog
    const blogs = index.children.filter(blog => blog !== featuredBlog)

    // sort by date
    blogs.sort((a, b) => {
      const aDate = new Date(a.jaenPageMetadata?.blogPost?.date || '')
      const bDate = new Date(b.jaenPageMetadata?.blogPost?.date || '')

      return bDate.getTime() - aDate.getTime()
    })

    return blogs
  }, [featuredBlog, index.children])

  return (
    <>
      <BlogOverviewHero
        featuredBlog={featuredBlog}
        withJaenPage={index.withJaenPage}
      />
      <BlogsSection blogs={moreBlogs} withJaenPage={index.withJaenPage} />
      <Box
        pos="relative"
        overflow="hidden"
        pb={{md: '10', xl: 32}}
        pt={{base: '16', lg: 48}}>
        <Image
          display={{base: 'none', md: 'block'}}
          src="/images/großhandel/card_line.svg"
          pos="absolute"
          top="0"
          w="full"
        />
        <Container
          maxW={CONTAINER_MAX_WIDTH}
          pos="relative"
          mb={{base: '16 !important', md: '0'}}>
          <HorizontalImageCard
            card={{
              tagFieldName: 'blogOverviewCard1Tag',
              tagDefaultValue: 'PRODUKTE',
              titleFieldName: 'blogOverviewCard1Title',
              titleDefaultValue: 'Unsere <i>Kataloge</i>',
              descriptionFieldName: 'blogOverviewCard1Description',
              descriptionDefaultValue:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do',
              imageFieldName: 'blogOverviewCard1Image',
              imageDefaultValue: '/images/großhandel/img1.png',
              buttonTextFieldName: 'blogOverviewCard1ButtonTextField',
              buttonTextFieldDefaultValue: 'Zum Shop'
            }}
            orientation="left"
          />
        </Container>
      </Box>
    </>
  )
}
export default BlogOverview
