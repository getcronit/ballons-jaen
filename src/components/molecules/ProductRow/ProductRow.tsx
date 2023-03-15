import {
  Box,
  Flex,
  Heading,
  HStack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import {ShopifyProduct} from '@snek-at/gatsby-theme-shopify'
import {GatsbyImage} from 'gatsby-plugin-image'

export const ProductRow = (props: {
  title: string
  featuredMedia: ShopifyProduct['featuredMedia']
  categoryTags: string[]
  otherTags: string[]
}) => {
  return (
    <Flex>
      <Box
        minW="100"
        boxSize="100"
        bg={useColorModeValue('gray.200', 'gray.600')}>
        {props.featuredMedia?.image && (
          <GatsbyImage
            alt={props.featuredMedia.image.altText || props.title}
            image={props.featuredMedia.image.gatsbyImageData}
          />
        )}
      </Box>

      <Flex ml={4} flexDirection="column" my="auto">
        <Heading as="h3" size="sm" fontWeight="semibold" mb={2}>
          {props.title}
        </Heading>

        <VStack divider={<StackDivider />}>
          <HStack>
            <Text fontWeight="semibold">Category:</Text>
            <Text>{props.categoryTags.join(' > ')}</Text>
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  )
}
