import {Button, Flex, Grid, Heading, Image, Stack, Text} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import {Link} from 'gatsby'
import {FC} from 'react'
import {BiChevronRight} from 'react-icons/bi'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {BlogMeta} from '../BlogPage/BlogMeta'
import {BlogTags} from '../BlogPage/BlogTags'

interface IBlogCardProps {
  slug: string
}

const BlogCard: FC<IBlogCardProps> = ({slug}) => {
  return (
    <Flex
      maxW={CONTAINER_MAX_WIDTH}
      borderRadius="xl"
      bg="white"
      boxShadow="dark"
      flexDir="column">
      <Grid
        borderRadius="1.875rem"
        overflow="hidden"
        flex="1"
        maxH={{base: '8.125rem', sm: '13.75rem', md: '37.5rem'}}>
        <Field.Image name="image" />
      </Grid>
      <Stack
        flex="1"
        gap={{base: 2, md: 0}}
        spacing="0"
        px={{base: 4, md: 6}}
        justify="center"
        py={{base: 2, md: 0}}>
        <BlogTags fieldName="tags" />
        <Field.Text
          as={Heading}
          size="h2418"
          //noOfLines={1}
          name="title"
          defaultValue="Ballons & Ballons: Die Geschichte"
        />{' '}
        <Field.Text
          //as={Heading}
          fontSize={{md: 'xs', lg: 'sm', xl: 'md'}}
          noOfLines={4}
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
          <Button
            as={Link}
            to={`/news/${slug}`}
            variant="link"
            rightIcon={
              <Grid
                placeItems="center"
                h={{base: '4', lg: '6'}}
                w={{base: '4', lg: '6'}}
                color="white"
                bg="red.500"
                fontSize={{lg: 'lg'}}
                borderRadius="full">
                <BiChevronRight />
              </Grid>
            }>
            Weiterlesen
          </Button>

          <BlogMeta />
        </Flex>
      </Stack>
    </Flex>
  )
}
export default BlogCard
