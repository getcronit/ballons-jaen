import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  List,
  ListIcon,
  ListItem,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  StackDivider,
  Text,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import {BallonButton} from '../../molecules/BallonButton'
import {FaShare} from '@react-icons/all-files/fa/FaShare'
import {FaShoppingBasket} from '@react-icons/all-files/fa/FaShoppingBasket'
import {
  getFormattedProductPrices,
  getProductTags,
  ProductPageData,
  ShopifyProduct,
  withStoreContext
} from '@snek-at/gatsby-theme-shopify'
import {Link, navigate} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import React, {useEffect, useState} from 'react'
import {BsBalloonHeart, BsBalloonHeartFill} from 'react-icons/bs'
import {FaBoxes, FaChevronRight, FaRuler, FaTruck} from 'react-icons/fa'
import {ChevronRightIcon} from '@chakra-ui/icons'
import {PhotoProvider, PhotoView} from 'react-photo-view'
import {getSrcFromImageData} from '../../../common/get-src-from-image-data'

import {
  getProductMetafields,
  ProductFilling
} from '../../../common/getProductMetafields'
import {getProductPrices, replaceHexColorsInHTML} from '../../../common/utils'
import {useBasket} from '../../../services/basket'
import {ProductSlider} from '../../molecules/ProductSlider'
import NewsSlider from '../../organisms/NewsSlider/NewsSlider'
import ProductsPageShell from '../ProductsTemplate/ProductsPageShell'

export interface ProductTemplateProps extends ProductPageData {
  path: string
  wholesale?: boolean
  allTags: string[]
  onWishlistAdd: (id: string) => void
  isOnWishList?: boolean
  onGoBack: () => void
}

export const ProductTemplate = ({
  path,
  wholesale,
  allTags,
  onWishlistAdd,
  onGoBack,
  shopifyProduct,
  relatedProducts,
  isOnWishList = false
}: ProductTemplateProps) => {
  const productTags = getProductTags(shopifyProduct)

  const [allActiveTags, setAllActiveTags] = useState<string[]>([])

  console.log('allActiveTags', allActiveTags, allTags)

  useEffect(() => {
    // get all active tags from location search
    const urlParams = new URLSearchParams(window.location.search)

    const activeTags = urlParams.getAll('t')

    setAllActiveTags(activeTags)
  }, [])

  return (
    <Stack
      pos={'relative'}
      ml={{base: '2', md: '12'}}
      mr={{base: '2', md: '12'}}
      bg="white"
      borderRadius="xl"
      dir="column"
      boxShadow="sm"
      //w="100%"
      my="8"
      pb="16">
      <Stack
        px={{
          base: 4,

          xl: 8
        }}
        pt="16"
        spacing={{
          base: 8,
          md: 12,
          lg: 16,
          xl: 20
        }}>
        <Stack spacing={12}>
          <Breadcrumb separator={<ChevronRightIcon boxSize="6" />}>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/products">
                Alle Artikel
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                as={Link}
                to={`/products/${shopifyProduct.handle}`}>
                {shopifyProduct.handle}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Container maxW="full" mx="auto">
            <Stack direction={{base: 'column', lg: 'row'}} spacing="14">
              <Box pos="relative">
                <ImageSlider
                  featuredMedia={shopifyProduct.featuredMedia}
                  media={shopifyProduct.media}
                />
              </Box>

              <Stack
                spacing="8"
                w="full"
                position={{base: 'relative', lg: 'sticky'}}
                top={{
                  base: '0',
                  lg: 44
                }}
                px={{base: 0, md: 4}}
                m={{base: 0, md: 1}}
                h="fit-content">
                <ProductDetail
                  wholesale={wholesale}
                  product={shopifyProduct}
                  onWishlistAdd={onWishlistAdd}
                  isOnWishList={isOnWishList}
                  onGoBack={onGoBack}
                />
              </Stack>
            </Stack>
          </Container>
          <Box>
            <ProductMoreDetail description={shopifyProduct.descriptionHtml} />
          </Box>
        </Stack>

        {/* <Stack spacing="8">
      <Heading size="xl" textAlign="center" my="8">
        Neuigkeiten
      </Heading>
      <NewsSlider />
    </Stack> */}
      </Stack>

      <ProductSlider
        heading="Ähnliche Produkte"
        products={relatedProducts.nodes}
        prefixPath="/products"
        wholesale={wholesale}
      />
    </Stack>
  )
}

function Price({
  prices
}: {
  prices: ReturnType<typeof getFormattedProductPrices>
}) {
  const {priceFormatted, compareAtPriceFormatted} = prices

  if (compareAtPriceFormatted) {
    // strike through price and put discount price on the right side
    return (
      <Flex
        direction="row"
        wrap="wrap"
        justifyContent={{
          base: 'center',
          md: 'flex-start'
        }}>
        <Text
          fontSize="sm"
          fontWeight="semibold"
          color="gray.600"
          textDecoration="line-through">
          {compareAtPriceFormatted}
        </Text>

        <Heading
          fontSize="md"
          mt={{
            base: 0,
            md: 4
          }}
          fontWeight="semibold"
          color="red.500">
          {priceFormatted}
        </Heading>
      </Flex>
    )
  }

  return (
    <Heading size="md" fontWeight="semibold">
      {priceFormatted}
    </Heading>
  )
}

const ProductDetail = withStoreContext<{
  product: ProductPageData['shopifyProduct']
  isOnWishList?: boolean

  wholesale?: boolean

  onWishlistAdd: (id: string) => void

  onGoBack: () => void
}>(props => {
  const productMetatfields = getProductMetafields(props.product)

  const stepperStep = props.wholesale
    ? parseInt(productMetatfields.wholesale?._SU || '1')
    : parseInt(productMetatfields.details?._SU || '1')
  const minQuantity = stepperStep

  const [quantity, setQuantity] = React.useState(minQuantity)

  const prices = getProductPrices(props.product, {
    isWholesale: props.wholesale || false
  })

  let taxable = props.product.variants[0]?.taxable

  if (props.wholesale) {
    taxable = false
  }

  const tags = getProductTags(props.product)

  const productTags = []

  if (tags.categoryString) {
    productTags.push(tags.categoryString)
  }

  if (tags.otherString) {
    productTags.push(tags.otherString)
  }

  if (props.product.vendor !== '-') {
    productTags.push(`Hersteller: ${props.product.vendor}`)
  }

  if (props.product.productType && props.product.productType !== '-') {
    productTags.push(`Art: ${props.product.productType}`)
  }

  const basket = useBasket()

  const addProductToBasket = () => {
    basket.addProduct({
      variantId: props.product.variants[0].shopifyId,
      quantity,
      stepperQuantity: stepperStep,
      wholesalePrice: prices.wholesalePrice
    })

    setQuantity(minQuantity)
  }

  const availableForSale =
    (props.product.variants[0].price || prices.wholesalePrice) &&
    props.product.variants[0].availableForSale

  return (
    <VStack align="left" spacing="4" divider={<StackDivider />}>
      <Stack>
        <Heading as="h1" fontSize="2xl">
          {props.product.title}
        </Heading>

        <Text fontSize="sm" color="gray.600">
          {tags.otherTags.map(tag => tag.split(':')[1]).join(', ')}
        </Text>

        <Text fontSize="sm">{props.product.description || '-'}</Text>
      </Stack>

      {/* <Divider />

      {productTags.map((tag, index) => (
        <Box
          as="span"
          fontSize={'xs'}
          fontWeight={'hairline'}
          color="gray.600"
          mr={2}
          key={index}>
          {tag}
        </Box>
      ))} */}

      <List spacing="4">
        {props.wholesale === false && productMetatfields.details?.filling && (
          <ListItem>
            <HStack spacing="4">
              <ListIcon
                as={
                  productMetatfields.details.filling ===
                  ProductFilling.FILLED_WITH_HELIUM
                    ? BsBalloonHeartFill
                    : BsBalloonHeart
                }
                boxSize={8}
              />
              <Text
                fontSize={{
                  base: 'xs',
                  md: 'sm'
                }}
                color="gray.600">
                {productMetatfields.details.filling}
              </Text>
            </HStack>
          </ListItem>
        )}

        {productMetatfields.details?.bundle && (
          <ListItem>
            <HStack spacing="4">
              <ListIcon as={FaBoxes} boxSize={8} />
              <Text
                fontSize={{
                  base: 'xs',
                  md: 'sm'
                }}
                color="gray.600">
                {productMetatfields.details.bundle}{' '}
                {productMetatfields.details.packaging}
              </Text>
            </HStack>
          </ListItem>
        )}

        {productMetatfields.details?.sizeHelper && (
          <ListItem>
            <HStack spacing="4">
              <ListIcon as={FaRuler} boxSize={8} />
              <Text
                fontSize={{
                  base: 'xs',
                  md: 'sm'
                }}
                color="gray.600">
                {productMetatfields.details.sizeHelper}
              </Text>
            </HStack>
          </ListItem>
        )}
      </List>

      <Text fontSize="sm">
        Artikelnummer:{' '}
        <Text as="span" fontSize="sm" color="gray.600">
          {props.product.variants[0].sku || '-'}
        </Text>
      </Text>

      <Stack>
        <Stack spacing="4" mt="4">
          <HStack>
            <Price prices={prices} />

            <Text fontSize="xs" color="gray.600">
              {taxable ? 'inkl.' : 'exkl.'} USt.
            </Text>
          </HStack>

          {availableForSale ? (
            <Text color="green" fontSize="sm">
              {productMetatfields.details?.available}
            </Text>
          ) : (
            <Text color="red.500">Derzeit nicht verfügbar</Text>
          )}

          <HStack>
            <NumberInput
              size="md"
              maxW={24}
              step={stepperStep}
              defaultValue={minQuantity}
              min={minQuantity}
              value={quantity}
              onChange={valueString => {
                setQuantity(parseInt(valueString))
              }}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Tooltip label="Zum Onlineshop" aria-label="Zum Onlineshop">
              <BallonButton
                // display={{
                //   base: 'none',
                //   md: 'flex'
                // }}
                size={{
                  base: 'sm',
                  md: 'md'
                }}
                py="7 !important"
                isDisabled={!availableForSale}
                fontWeight="semibold"
                textTransform="uppercase"
                fontSize="md"
                onClick={addProductToBasket}
                leftIcon={<FaShoppingBasket />}>
                In den Warenkorb
              </BallonButton>
            </Tooltip>
          </HStack>
        </Stack>
      </Stack>

      <Flex alignItems="center" justifyContent="center" fontSize="xl">
        <Box mx="auto">
          <ShareText />
        </Box>
      </Flex>
    </VStack>
  )
})

function ShareText() {
  const value = typeof window !== 'undefined' ? window.location.href : ''

  const {hasCopied, onCopy} = useClipboard(value)

  return (
    <Center
      color={hasCopied ? 'red.500' : undefined}
      _hover={{
        color: hasCopied ? 'red.400' : 'red.300'
      }}
      verticalAlign="center"
      cursor="pointer">
      <Icon as={FaShare} mr="2" />
      <Text fontWeight="semibold" onClick={onCopy}>
        Teilen
        {hasCopied && (
          <Text ml="2" fontWeight="thin">
            (Kopiert!)
          </Text>
        )}
      </Text>
    </Center>
  )
}

type SliderMedia = ShopifyProduct['featuredMedia']

const ImageThumbnailWrapItem = (props: {
  media: SliderMedia
  active: boolean
  onClick: () => void
}) => {
  if (!props.media) {
    return null
  }

  const {gatsbyImageData, altText} = props.media.image

  return (
    <WrapItem
      boxSize={{base: '16', md: '20'}}
      onClick={props.onClick}
      cursor="pointer"
      boxShadow={props.active ? 'inset 0px 4px 0px 0px #eb1933' : 'none'}
      p={2}
      mr={2}
      mb={2}
      _hover={{
        bg: useColorModeValue('gray.100', 'gray.800')
      }}
      transition="ease-out">
      <GatsbyImage
        onDragStart={e => {
          e.preventDefault()
        }}
        draggable="false"
        image={gatsbyImageData}
        alt={altText || 'Product image '}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'contain',
          objectPosition: 'center'
        }}
        objectFit="contain"
        imgStyle={{
          objectFit: 'contain'
        }}
      />
    </WrapItem>
  )
}

const ImageSlider = (props: {
  featuredMedia: SliderMedia
  media: ShopifyProduct['media']
}) => {
  const media = props.media
  const [curMediaIndex, setCurMediaIndex] = React.useState<number>(0)

  const curMedia = media[curMediaIndex]

  return (
    <PhotoProvider maskOpacity={0.8}>
      <VStack>
        <PhotoView
          src={getSrcFromImageData(props.featuredMedia?.image.gatsbyImageData)}>
          <Center
            cursor="zoom-in"
            boxSize={{
              base: 'none',
              sm: 'xs',
              md: 'xs',
              lg: 'xs',
              xl: 'xs',
              '2xl': 'md'
            }}
            p="2"
            borderRadius="xl"
            // border="1px"
            // borderColor="gray.200"
            bg="white">
            {curMedia?.image ? (
              <GatsbyImage
                image={curMedia.image.gatsbyImageData}
                alt={curMedia.image.altText || 'Product Image'}
                style={{
                  height: '100%',
                  width: '100%'
                }}
                objectFit="contain"
              />
            ) : (
              <Text>Kein Bild vorhanden</Text>
            )}
          </Center>
        </PhotoView>

        {media.length > 1 && (
          <Wrap
            overflow="hidden"
            bg={'white'}
            borderRadius="lg"
            border="1px"
            borderColor="gray.100"
            spacing={0}
            justify="center">
            {media.map((media, index) => (
              <ImageThumbnailWrapItem
                key={index}
                media={media}
                active={curMediaIndex === index}
                onClick={() => {
                  setCurMediaIndex(index)
                }}
              />
            ))}
          </Wrap>
        )}
      </VStack>
    </PhotoProvider>
  )
}

const ProductMoreDetail = (props: {description: string}) => {
  const color = useColorModeValue('#000000', '#ffffff')

  const html = replaceHexColorsInHTML(props.description, '#000000', color)

  return (
    <Box py="8">
      <Box dangerouslySetInnerHTML={{__html: html}} />
    </Box>
  )
}
