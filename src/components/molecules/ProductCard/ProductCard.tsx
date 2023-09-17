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
import * as styles from './styles'

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
  left,
  bwidth,
  bcolor,
  prefixPath,
  searchLocation,
  taxable,
  wholesale
}: ProductCardProps) => {
  let path = prefixPath ? `${prefixPath}/${product.handle}` : product.handle

  if (searchLocation) {
    path = `${path}?${searchLocation}`
  }

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
        px={{base: '2', lg: '3'}}
        py="5"
        // h={'full'}
        minH="full"
        borderRadius="xl"
        // boxShadow="lg"
        // border="1px"
        // borderColor="border"
        // mt="3"
      >
        <Stack>
          <Box position="relative" p="4">
            <AspectRatio ratio={10 / 9}>
              <>
                {/* <input
                  type="radio"
                  name={'imgbox-' + cardId}
                  id={`imgbox-${cardId}-${0}`}
                  key={0}
                  ref={el => (radioRef.current[0] = el)}
                  readOnly
                  checked></input> */}
                <ImageBoxWithTags
                  image={product.featuredMedia?.image}
                  tags={coloredBadges}
                />
              </>
            </AspectRatio>

            {/* {product.media.slice(0, 3).map((media, index) => (
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
            ))} */}
          </Box>

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

            <List spacing="2" gap="0">
              {wholesale === false && productMetatfields.details?.filling && (
                <ListItem>
                  <HStack spacing="4">
                    <ListIcon
                      as={
                        productMetatfields.details.filling ===
                        ProductFilling.FILLED_WITH_HELIUM
                          ? BsBalloonHeartFill
                          : BsBalloonHeart
                      }
                      boxSize={4}
                    />
                    <Text
                      textAlign="left"
                      noOfLines={1}
                      fontSize={'xs'}
                      color="gray.600">
                      {productMetatfields.details.filling}
                    </Text>
                  </HStack>
                </ListItem>
              )}

              {productMetatfields.details?.bundle && (
                <ListItem>
                  <HStack spacing="4">
                    <ListIcon as={FaBoxes} boxSize={4} />
                    <Text
                      textAlign="left"
                      noOfLines={1}
                      fontSize={'xs'}
                      color="gray.600">
                      {productMetatfields.details.bundle}{' '}
                      {productMetatfields.details.packaging}
                    </Text>
                  </HStack>
                </ListItem>
              )}

              {productMetatfields.details?.sizeHelper &&
                productMetatfields.details.sizeHelper !== '[object Object]' && (
                  <ListItem>
                    <HStack spacing="4">
                      <ListIcon as={FaRuler} boxSize={4} />
                      <Text
                        textAlign="left"
                        noOfLines={1}
                        fontSize={'xs'}
                        color="gray.600">
                        {productMetatfields.details.sizeHelper}
                      </Text>
                    </HStack>
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
        </Stack>
        {/* 
        <Text fontSize="sm" noOfLines={1}>
          {tags.otherString}
        </Text> */}
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
          // border="1px"
          // borderColor="gray.200"
          boxShadow="light"
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
                  onMouseOver={() => (radioRef.current[index]!.checked = true)}
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
