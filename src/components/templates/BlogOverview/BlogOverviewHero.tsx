import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  VStack
} from '@chakra-ui/react'
import {Field} from '@atsnek/jaen'
import {Link} from 'gatsby'
import {FC} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {JaenPageIndexType} from '../../../types/commonTypes'
import {BlogMeta} from '../BlogPage/BlogMeta'
import {BlogTags} from '../BlogPage/BlogTags'

const FeaturedBlog: React.FC<{
  featuredBlog: JaenPageIndexType['childPages'][number]
  withJaenPage: JaenPageIndexType['withJaenPage']
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
            base: 'column',
            md: 'row'
          }}>
          <Box
            borderRadius="xl"
            overflow="hidden"
            isolation="isolate"
            flex="1"
            maxH={{
              base: '200px',
              sm: '300px',
              md: '600px'
            }}>
            <Field.Image name="image" />
          </Box>
          <Stack
            flex="1"
            gap={{
              base: 2,
              md: 0
            }}
            spacing="0"
            px={{
              base: 4,
              md: 6,
              xl: 10
            }}
            justify="center"
            py="6">
            <BlogTags fieldName="tags" />
            <Field.Text
              as={Heading}
              size="h3015"
              name="title"
              defaultValue="Ballons & Ballons: Die Geschichte"
            />
            <Field.Text
              variant="light"
              size="b2012"
              noOfLines={6}
              name="description"
              defaultValue={`
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
              `}
            />
            <Flex justify="space-between" w="full" mt="4 !important">
              <Box>
                <Button
                  as={Link}
                  to={`/news/${props.featuredBlog.slug}`}
                  variant="outline"
                  size={{
                    base: 'sm',
                    lg: 'md'
                  }}>
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
  featuredBlog?: JaenPageIndexType['childPages'][number]
  withJaenPage: JaenPageIndexType['withJaenPage']
}

const BlogOverviewHero: FC<IBlogOverviewHeroProps> = props => {
  return (
    <Box
      bgImage={{
        base: '/images/blog_overview/mobile_hero_bg.svg',
        md: '/images/blog_overview/hero_bg.svg'
      }}
      pt={{base: 4, md: 32}}
      pb="32"
      bgPos={{base: 'top 2rem left 0'}}
      bgRepeat="no-repeat"
      bgSize={{base: 'contain', md: 'cover'}}>
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <VStack>
          <Field.Text
            as={Heading}
            mb={{base: '25%', md: '5%'}}
            size="h6020"
            fontWeight="semibold"
            whiteSpace="nowrap"
            name="heroTitle"
            defaultValue="<i>Wissenswertes</i> über Ballons & Ballons"
          />
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
