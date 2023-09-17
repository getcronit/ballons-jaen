import {Field, useContentManagement} from '@atsnek/jaen'
import {Box, Button, Flex, Grid, Heading, Stack} from '@chakra-ui/react'
import {FaChevronRight} from '@react-icons/all-files/fa/FaChevronRight'
import {Link} from 'gatsby'
import {FC} from 'react'
import {WissenArticleMetaBar} from '../../organisms/WissenArticleMetaBar'

interface IBlogCardProps {
  slug: string
}

const BlogCard: FC<IBlogCardProps> = ({slug}) => {
  const {isEditing} = useContentManagement()

  return (
    <Flex borderRadius="xl" bg="white" boxShadow="dark" flexDir="column">
      <Box borderRadius="1.875rem" overflow="hidden" h="xs">
        <Field.Image name="image" />
      </Box>
      <Stack
        gap={{base: 2, md: 0}}
        spacing="4"
        px={{base: 4, md: 6}}
        justify="center"
        py={{base: 2, md: 0}}>
        <WissenArticleMetaBar />
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
          pointerEvents={isEditing ? 'none' : 'auto'}
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
        <Flex justify="space-between" w="full" my="4 !important">
          <Button
            as={Link}
            to={`/wissen/${slug}`}
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
                <FaChevronRight />
              </Grid>
            }>
            Weiterlesen
          </Button>
        </Flex>
      </Stack>
    </Flex>
  )
}
export default BlogCard
