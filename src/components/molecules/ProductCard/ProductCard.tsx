import {
  AspectRatio,
  Badge,
  Box,
  BoxProps,
  Flex,
  HStack,
  IconButton,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import {BsBalloonHeart} from '@react-icons/all-files/bs/BsBalloonHeart'
import {BsBalloonHeartFill} from '@react-icons/all-files/bs/BsBalloonHeartFill'
import {FaBoxes} from '@react-icons/all-files/fa/FaBoxes'
import {FaRuler} from '@react-icons/all-files/fa/FaRuler'
import {FaShoppingBasket} from '@react-icons/all-files/fa/FaShoppingBasket'
import {
  getFormattedProductPrices,
  getProductTags,
  ShopifyProduct
} from '@snek-at/gatsby-theme-shopify'
import {Link as GatsbyLink} from 'gatsby'
import {GatsbyImage, IGatsbyImageData} from 'gatsby-plugin-image'
import React from 'react'

import {
  getProductMetafields,
  ProductFilling
} from '../../../common/getProductMetafields'

import {getProductPrices} from '../../../common/utils'
import {useBasket} from '../../../services/basket'

export interface ProductCardProps {
  product: ShopifyProduct
  borderline?: boolean
  left?: boolean
  bwidth?: string
  bcolor?: string
  prefixPath?: string
  searchLocation?: string
  taxable?: boolean
  wholesale?: boolean
}

export const ProductCard = ({
  product,
  borderline,

  prefixPath,
  searchLocation,
  taxable,
  wholesale
}: ProductCardProps) => {
  let path = prefixPath ? `${prefixPath}/${product.handle}` : product.handle

  if (searchLocation) {
    path = `${path}?${searchLocation}`
  }

  const tags = getProductTags(product)

  const prices = getProductPrices(product, {
    isWholesale: wholesale || false
  })

  taxable = taxable !== undefined ? taxable : product.variants[0]?.taxable

  if (wholesale) {
    taxable = false
  }

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

  const productMetatfields = getProductMetafields(product)

  const basket = useBasket()

  const stepperStep = wholesale
    ? parseInt(productMetatfields.wholesale?._SU || '1')
    : parseInt(productMetatfields.details?._SU || '1')

  const addProductToBasket = () => {
    basket.addProduct({
      variantId: product.variants[0].shopifyId,
      quantity: stepperStep,
      stepperQuantity: stepperStep,
      wholesalePrice: prices.wholesalePrice
    })
  }

  return (
    <LinkBox
      as={Stack}
      minW="240px"
      boxSize="full"
      cursor="pointer"
      textAlign={{
        base: 'center',
        md: 'left'
      }}
      position="relative"
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow="light"
      px={{base: '2', lg: '3'}}
      py="5"
      minH="full"
      borderRadius="xl"
      sx={{
        transition: 'transform 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        ':before, :after': {
          content: '""',
          position: 'absolute',
          width: '0%',
          height: '2px',
          backgroundColor: 'red',
          transition: 'width 0.3s ease, left 0.3s ease',
          zIndex: 1
        },
        ':before': {
          left: '50%',
          top: 0
        },
        ':after': {
          left: '50%',
          bottom: 0
        },
        ':hover:before, :hover:after': {
          width: '100%',
          left: '0'
        },
        ':hover': {
          transform: 'scale(1.05)'
        }
      }}>
      <ImageBoxWithTags
        image={product.featuredMedia?.image}
        tags={coloredBadges}
      />

      <Stack divider={<StackDivider />} spacing="4">
        <Stack>
          <LinkOverlay
            as={GatsbyLink}
            fontSize="md"
            to={path}
            fontWeight={'semibold'}>
            {product.title}
          </LinkOverlay>
          <Text fontSize="sm" color="gray.600">
            {tags.otherTags.map(tag => tag.split(':')[1]).join(', ')}
          </Text>
        </Stack>

        <List spacing="2" color="gray.600" fontSize="sm">
          {wholesale === false && productMetatfields.details?.filling && (
            <ListItem>
              <ListIcon
                as={
                  productMetatfields.details.filling ===
                  ProductFilling.FILLED_WITH_HELIUM
                    ? BsBalloonHeartFill
                    : BsBalloonHeart
                }
              />
              {productMetatfields.details.filling}
            </ListItem>
          )}

          {productMetatfields.details?.bundle && (
            <ListItem>
              <ListIcon as={FaBoxes} boxSize={4} />
              {productMetatfields.details.bundle}{' '}
              {productMetatfields.details.packaging}
            </ListItem>
          )}

          {productMetatfields.details?.sizeHelper &&
            productMetatfields.details.sizeHelper !== '[object Object]' && (
              <ListItem>
                <ListIcon as={FaRuler} boxSize={4} />

                {productMetatfields.details.sizeHelper}
              </ListItem>
            )}
        </List>

        <HStack>
          <ProductPrices prices={prices} />
          <Text fontSize="xs" color="gray.600" textAlign="center">
            {taxable ? 'inkl.' : 'exkl.'} USt.
          </Text>

          <Spacer />

          <IconButton
            aria-label="Warenkorb"
            icon={<FaShoppingBasket />}
            variant="ghost"
            onClick={addProductToBasket}
          />
        </HStack>
      </Stack>
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
    <Flex
      overflow="hidden"
      justifyContent="center"
      position="relative"
      {...rest}>
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
            height: '240px',
            width: '240px'
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
    </Flex>
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
    <Text fontSize="sm" fontWeight="semibold" mb={2}>
      {prices.priceFormatted}
    </Text>
  )
}
