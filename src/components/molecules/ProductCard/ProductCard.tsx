import {
  AspectRatio,
  Badge,
  Box,
  BoxProps,
  Flex,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Spacer,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import {
  getFormattedProductPrices,
  getProductTags,
  ShopifyProduct
} from '@snek-at/gatsby-theme-shopify'
import {Link as GatsbyLink} from 'gatsby'
import {GatsbyImage, getSrcSet, IGatsbyImageData} from 'gatsby-plugin-image'
import React from 'react'
import {getSrcFromImageData} from '../../../common/get-src-from-image-data'

import {getProductPrices} from '../../../common/utils'
import * as styles from './styles'

export interface ProductCardProps {
  product: ShopifyProduct
  borderline?: boolean
  left?: boolean
  bwidth?: string
  bcolor?: string
  prefixPath?: string
  taxable?: boolean
  wholesale?: boolean
}

export const ProductCard = ({
  product,
  borderline,
  left,
  bwidth,
  bcolor,
  prefixPath,
  taxable,
  wholesale
}: ProductCardProps) => {
  const path = prefixPath ? `${prefixPath}/${product.handle}` : product.handle

  const radioRef = React.useRef<Array<HTMLInputElement | null>>([])

  const tags = getProductTags(product)

  const prices = getProductPrices(product, {
    isWholesale: wholesale || false
  })

  taxable = taxable !== undefined ? taxable : product.variants[0]?.taxable

  if (wholesale) {
    taxable = false
  }

  const cardId = product.id

  if (product.media.length === 0) {
    borderline = false
  }

  const coloredBadges: Array<{name: string; color: string; bg: string}> = []

  if (
    new Date(product.createdAt).getTime() >
    Date.now() - 7 * 24 * 60 * 60 * 1000
  ) {
    coloredBadges.push({name: 'Neu', color: 'black', bg: 'agt.yellow'})
  }

  if (prices.discountFormatted) {
    coloredBadges.push({
      name: prices.discountFormatted,
      color: 'white',
      bg: 'agt.red'
    })
  }

  return (
    <LinkBox>
      <VStack
        as={GatsbyLink}
        to={path}
        display="block"
        css={styles.cardStyle(borderline, bwidth, bcolor, left)}
        boxSize="full"
        cursor="pointer"
        // bg="red"
        textAlign={{
          base: 'center',
          md: 'left'
        }}>
        <Box
          className="pcard"
          position="relative"
          cursor="pointer"
          bg="primary"
          px={{base: '1', md: '2', lg: '3'}}
          py="5"
          // h={'full'}
          minH="full"
          borderRadius="xl"
          // boxShadow="lg"
          // border="1px"
          // borderColor="border"
          // mt="3"
        >
          <Box position="relative">
            <AspectRatio ratio={10 / 9}>
              <>
                <input
                  type="radio"
                  className="radioimg"
                  name={'imgbox-' + cardId}
                  id={`imgbox-${cardId}-${0}`}
                  key={0}
                  ref={el => (radioRef.current[0] = el)}
                  readOnly
                  checked></input>
                <ImageBoxWithTags
                  image={product.featuredMedia?.image}
                  tags={coloredBadges}
                  className="main"
                />
              </>
            </AspectRatio>

            {product.media.slice(0, 3).map((media, index) => (
              <Box key={index}>
                {index !== 0 && (
                  <Box>
                    <input
                      type="radio"
                      className="radioimg"
                      name={'imgbox-' + cardId}
                      id={`imgbox-${cardId}-${index}`}
                      ref={el => (radioRef.current[index] = el)}
                    />
                    <ImageBoxWithTags
                      image={media.image}
                      tags={coloredBadges}
                      className="preview"
                    />
                  </Box>
                )}
              </Box>
            ))}
          </Box>

          <Text fontSize="sm" noOfLines={1}>
            {tags.otherString}
          </Text>
          <LinkOverlay as={GatsbyLink} to={path} fontWeight={'semibold'}>
            {product.title}
          </LinkOverlay>
          <ProductPrices prices={prices} />
          <Text fontSize="xs" color="gray.600" textAlign="center">
            {taxable ? 'inkl.' : 'exkl.'} MwSt.
          </Text>
          {/* <Spacer
            position="absolute"
            className="bspacer"
            w="0"
            h="100%"
            top="0"
            borderLeft="1px"
            borderColor="gray.200"
            transform="scale(0.97)"
          /> */}
          <Box
            className="borderline"
            cursor="pointer"
            bg={useColorModeValue('white', 'gray.700')}
            px={{base: '1', md: '2', lg: '3'}}
            py="5"
            // h={'full'}
            // minH={'full'}
            borderRadius="xl"
            border="1px"
            borderColor="gray.200"
            _hover={{
              before: {borderColor: 'agt.red'},
              _after: {borderColor: 'agt.red'}
            }}>
            <VStack
              className="imgline"
              position="absolute"
              opacity="0"
              boxSize="full"
              py="0.5rem"
              px="1">
              {product.media.slice(0, 3).map((m, index) => (
                <label htmlFor={`imgbox-${cardId}-${index}`} key={index}>
                  <Box
                    transform="scale(0.97)"
                    borderBottom="1px"
                    borderColor="border"
                    py="1"
                    _hover={{borderColor: 'agt.red'}}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    onMouseOver={() =>
                      (radioRef.current[index]!.checked = true)
                    }
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    onMouseLeave={() => (radioRef.current[0]!.checked = true)}>
                    <GatsbyImage
                      onDragStart={e => {
                        e.preventDefault()
                      }}
                      draggable="false"
                      image={m.image.gatsbyImageData}
                      alt={m.image.altText || ''}
                      objectFit="contain"
                      style={{
                        height: '100%',
                        width: '100%'
                      }}
                    />
                  </Box>
                </label>
              ))}
            </VStack>
          </Box>
        </Box>
      </VStack>
    </LinkBox>
  )
}

const ImageBoxWithTags: React.FC<
  {
    image?: {
      src: string
      altText: string | null
      gatsbyImageData: IGatsbyImageData
    }
    tags: Array<{name: string; color: string; bg: string}>
  } & BoxProps
> = ({tags, image: propImage, ...rest}) => {
  // Box with image as background and tags on bottom

  return (
    <Box overflow="hidden" position="relative" {...rest}>
      {propImage?.gatsbyImageData ? (
        <GatsbyImage
          onDragStart={e => {
            e.preventDefault()
          }}
          draggable="false"
          image={propImage?.gatsbyImageData}
          alt={propImage?.altText || ''}
          objectFit="contain"
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
            objectPosition: 'center'
          }}
        />
      ) : (
        'Kein Bild vorhanden'
      )}
      <Flex position="absolute" top="0" left="0" right="0" p={2}>
        {tags.map((tag, index) => (
          <Badge
            key={index}
            variant="solid"
            fontSize="sm"
            fontWeight="semibold"
            rounded="md"
            px={2}
            mr={2}
            color={tag.color}
            bgColor={tag.bg}
            textTransform="none">
            {tag.name}
          </Badge>
        ))}
      </Flex>
    </Box>
  )
}

const ProductPrices = ({
  prices
}: {
  prices: ReturnType<typeof getFormattedProductPrices>
}) => {
  if (prices.compareAtPriceFormatted) {
    return (
      <HStack
        wrap="wrap"
        justifyContent={{
          base: 'center',
          md: 'flex-start'
        }}>
        <Text
          fontSize="sm"
          fontWeight="semibold"
          color="gray.600"
          textDecoration="line-through !important">
          {prices.compareAtPriceFormatted}
        </Text>
        <Text fontSize="sm" fontWeight="bold" color="red.500" ml={2}>
          {prices.priceFormatted}
        </Text>
      </HStack>
    )
  }

  return (
    <Box fontSize="sm" fontWeight="semibold" mb={2}>
      <Text>{prices.priceFormatted}</Text>
    </Box>
  )
}
