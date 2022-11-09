import { ChevronLeftIcon } from "@chakra-ui/icons"
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useClipboard,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { FaHeart } from "@react-icons/all-files/fa/FaHeart"
import { FaShare } from "@react-icons/all-files/fa/FaShare"
import { FaShoppingBasket } from "@react-icons/all-files/fa/FaShoppingBasket"
import { GiBalloons } from "@react-icons/all-files/gi/GiBalloons"
import {
  getFormattedProductPrices,
  getProductTags,
  ProductPageData,
  ShopifyProduct,
  withStoreContext,
} from "@snek-at/gatsby-theme-shopify"
import { navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import ImagesViewer from "react-images-viewer"

import { replaceHexColorsInHTML } from "../../../common/utils"
import { useBasket } from "../../../services/basket"
import { ProductSlider } from "../../molecules/ProductSlider"
import ProductsPageShell from "../ProductsTemplate/ProductsPageShell"

export interface ProductTemplateProps extends ProductPageData {
  path: string
  allTags: string[]
  onWishlistAdd: (id: string) => void
  isOnWishList?: boolean
  onGoBack: () => void
}

export const ProductTemplate = ({
  path,
  allTags,
  onWishlistAdd,
  onGoBack,
  shopifyProduct,
  relatedProducts,
  isOnWishList = false,
}: ProductTemplateProps) => {
  // remove last part of path
  const prefixPath = path.split("/").slice(0, -1).join("/")

  const productTags = getProductTags(shopifyProduct)

  const allActiveTags = [
    ...productTags.categoryTags,
    ...productTags.otherTags,
    `Typ:${shopifyProduct.productType}`,
    `Hersteller:${shopifyProduct.vendor}`,
  ]

  console.log("allTags", allTags)
  console.log("allActiveTags", allActiveTags)

  return (
    <>
      <ProductsPageShell
        allTags={allTags}
        activeTags={allActiveTags}
        onActiveTagsChange={tags => {
          navigate("/products", {
            state: {
              activeTags: tags,
            },
          })
        }}
        sortOptions={["Alphabetisch", "Preis aufsteigend", "Preis absteigend"]}
        onSortChange={() => {}}
      >
        <VStack dir="column" w="100%" px={2}>
          <VStack spacing={12}>
            <Flex direction={{ base: "column", lg: "row" }}>
              <ProductDetail
                product={shopifyProduct}
                onWishlistAdd={onWishlistAdd}
                isOnWishList={isOnWishList}
                onGoBack={onGoBack}
              />
              <ImageSlider
                featuredMedia={shopifyProduct.featuredMedia}
                media={shopifyProduct.media}
                description={shopifyProduct.descriptionHtml}
              />
            </Flex>
            <Box display={{ base: "block", md: "none" }}>
              <ProductMoreDetail description={shopifyProduct.descriptionHtml} />
            </Box>
          </VStack>
          <Box
            w={{
              base: "20rem",
              md: "30rem",
              lg: "55rem",
              xl: "80rem",
            }}
          >
            <ProductSlider
              heading="Ähnliche Produkte"
              products={relatedProducts.nodes}
              prefixPath={prefixPath}
            />
          </Box>
        </VStack>
      </ProductsPageShell>
    </>
  )
}

function Price({
  prices,
}: {
  prices: ReturnType<typeof getFormattedProductPrices>
}) {
  const { priceFormatted, compareAtPriceFormatted } = prices

  if (compareAtPriceFormatted) {
    // strike through price and put discount price on the right side
    return (
      <Flex
        direction="row"
        wrap="wrap"
        justifyContent={{
          base: "center",
          md: "flex-start",
        }}
      >
        <Text
          fontSize="xl"
          fontWeight="semibold"
          color="gray.600"
          textDecoration={"line-through"}
        >
          {compareAtPriceFormatted}
        </Text>

        <Heading
          size="3xl"
          mt={{
            base: 0,
            md: 4,
          }}
          fontWeight={"semibold"}
          color="red.500"
        >
          {priceFormatted}
        </Heading>
      </Flex>
    )
  }

  return (
    <Heading size="3xl" fontWeight={"semibold"}>
      {priceFormatted}
    </Heading>
  )
}

enum ProductFilling {
  AIR_ONLY = "nur für Luftfüllung geeignet!",
  HELIUM_ONLY = "für Heliumfüllung geeignet",
  AIR_AND_HELIUM = "für Helium- und Luftfüllung geeignet",
}

const getProductFilling = (
  product: ShopifyProduct
): ProductFilling | undefined => {
  const metafield = product.metafields.find(
    metafield =>
      metafield.key === "filling" && metafield.namespace === "details"
  )?.value as ProductFilling | undefined

  return metafield
}

const ProductDetail = withStoreContext<{
  product: ProductPageData["shopifyProduct"]
  isOnWishList?: boolean

  onWishlistAdd: (id: string) => void

  onGoBack: () => void
}>(props => {
  const user = null

  const [quantity, setQuantity] = React.useState(1)

  const prices = getFormattedProductPrices(props.product)

  const taxable = user ? false : props.product.variants[0]?.taxable

  console.log(`product`, props.product)

  console.log(user, props.product.variants[0]?.taxable)
  console.log(taxable)

  const tags = getProductTags(props.product)

  const productTags = []

  if (tags.categoryString) {
    productTags.push(tags.categoryString)
  }

  if (tags.otherString) {
    productTags.push(tags.otherString)
  }

  if (props.product.vendor !== "-") {
    productTags.push(`Hersteller: ${props.product.vendor}`)
  }

  if (props.product.productType && props.product.productType !== "-") {
    productTags.push(`Art: ${props.product.productType}`)
  }

  const basket = useBasket()

  const addProductToBasket = () => {
    basket.addProduct({
      variantId: props.product.variants[0].shopifyId,
      quantity,
    })

    setQuantity(1)
  }

  const availableForSale = props.product.variants[0].availableForSale
  const productFilling = getProductFilling(props.product)

  return (
    <>
      <Box
        overflow="hidden"
        px={{ base: 0, md: 4 }}
        py={{ base: 4, md: 8 }}
        m={{ base: 0, md: 1 }}
        position={{ base: "relative", lg: "sticky" }}
        top="15"
        alignSelf={"flex-start"}
      >
        <VStack align={"left"} spacing="4">
          <Button
            justifyContent="flex-start"
            variant="link"
            leftIcon={<ChevronLeftIcon />}
            onClick={props.onGoBack}
          >
            Zurück
          </Button>
          <Heading as="h1" size="xl">
            {props.product.title}
          </Heading>
          <Price prices={prices} />

          {taxable && (
            <Text fontSize="xs" color="gray.600">
              inkl. MwSt.
            </Text>
          )}

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

          {productFilling && (
            <>
              <Divider />

              <HStack spacing="4">
                <Icon as={GiBalloons} boxSize={10} />
                <Text size="xs" color="gray.600">
                  Für Luftfüllung geeignet
                </Text>
              </HStack>
            </>
          )}

          <Divider />

          <Text size="xs" fontWeight={"thin"}>
            Artikelnummer: {props.product.variants[0].sku || "-"}
          </Text>
          <Divider />

          {availableForSale === false && (
            <Text color="red.500">Derzeit nicht verfügbar</Text>
          )}

          <HStack>
            <NumberInput
              size="md"
              maxW={24}
              step={1}
              defaultValue={1}
              min={1}
              value={quantity}
              onChange={valueString => setQuantity(parseInt(valueString))}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <Button
              disabled={availableForSale === false}
              fontSize={"xl"}
              fontWeight={"semibold"}
              textTransform="uppercase"
              leftIcon={<Icon as={FaShoppingBasket} />}
              borderRadius={"full"}
              size="lg"
              onClick={addProductToBasket}
            >
              <Text>In den Warenkorb</Text>
            </Button>
          </HStack>
          <Divider />
          <Flex alignItems={"center"} justifyContent="center" fontSize={"xl"}>
            <Box mx="auto" onClick={addProductToBasket}>
              <Center
                color={props.isOnWishList ? "red.500" : undefined}
                _hover={{
                  color: props.isOnWishList ? "red.400" : "red.300",
                }}
                cursor="pointer"
              >
                <Icon as={FaHeart} mr="2" />
                <Text fontWeight={"semibold"}>Merken</Text>
              </Center>
            </Box>
            <Box mx="auto">
              <ShareText />
            </Box>
          </Flex>
          <Divider />
        </VStack>
      </Box>
    </>
  )
})

function ShareText() {
  const value = typeof window !== "undefined" ? window.location.href : ""

  const { hasCopied, onCopy } = useClipboard(value)

  return (
    <Center
      color={hasCopied ? "red.500" : undefined}
      _hover={{
        color: hasCopied ? "red.400" : "red.300",
      }}
      verticalAlign="center"
      cursor="pointer"
    >
      <Icon as={FaShare} mr="2" />
      <Text fontWeight={"semibold"} onClick={onCopy}>
        Teilen
        {hasCopied && (
          <Text ml="2" fontWeight={"thin"}>
            (Kopiert!)
          </Text>
        )}
      </Text>
    </Center>
  )
}

type SliderMedia = ShopifyProduct["featuredMedia"]

const ImageThumbnailWrapItem = (props: {
  media: SliderMedia
  active: boolean
  onClick: () => void
}) => {
  if (!props.media) {
    return null
  }

  const { gatsbyImageData, altText } = props.media.image

  return (
    <WrapItem
      boxSize={{ base: "16", md: "20" }}
      onClick={props.onClick}
      cursor="pointer"
      boxShadow={props.active ? "inset 0px 4px 0px 0px #eb1933" : "none"}
      p={2}
      mr={2}
      mb={2}
      _hover={{
        bg: useColorModeValue("gray.100", "gray.800"),
      }}
      transition="ease-out"
    >
      <GatsbyImage
        onDragStart={e => e.preventDefault()}
        draggable="false"
        image={gatsbyImageData}
        alt={altText || "Product image "}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </WrapItem>
  )
}

const ImageSlider = (props: {
  featuredMedia: SliderMedia
  media: ShopifyProduct["media"]
  description?: string
}) => {
  const media = props.media
  const [curMediaIndex, setCurMediaIndex] = React.useState<number>(0)

  const [isPreviewOpen, setIsPreviewOpen] = React.useState<boolean>(false)

  const curMedia = media[curMediaIndex]

  return (
    <>
      <ImagesViewer
        currImg={curMediaIndex}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        imgs={media.map(
          ({
            image: {
              altText: caption,
              gatsbyImageData: {
                images: { fallback },
              },
            },
          }) => ({
            src: fallback?.src,
            caption,
            srcSet: fallback?.srcSet,
          })
        )}
        showThumbnails
        onClickThumbnail={(index: number) => setCurMediaIndex(index)}
        onClickNext={() => {
          setCurMediaIndex(prevState => {
            return prevState + 1
          })
        }}
        onClickPrev={() => {
          setCurMediaIndex(prevState => {
            return prevState - 1
          })
        }}
      />
      <Box
        my="4"
        minW={{
          base: "25rem",
          md: "30rem",
          lg: "35rem",
          xl: "40rem",
        }}
      >
        <AspectRatio ratio={4 / 3}>
          <Box onClick={() => setIsPreviewOpen(true)} cursor="zoom-in">
            {curMedia?.image && (
              <GatsbyImage
                image={curMedia.image.gatsbyImageData}
                alt={curMedia.image.altText || "Product Image"}
              />
            )}
          </Box>
        </AspectRatio>
        <Wrap
          overflow={"hidden"}
          bg={useColorModeValue("gray.50", "gray.700")}
          spacing={0}
          justify="center"
        >
          {media.map((media, index) => (
            <ImageThumbnailWrapItem
              key={index}
              media={media}
              active={curMediaIndex === index}
              onClick={() => setCurMediaIndex(index)}
            />
          ))}
        </Wrap>

        <Box display={{ base: "none", md: "block" }}>
          <ProductMoreDetail description={props.description || ""} />
        </Box>
      </Box>
    </>
  )
}

const ProductMoreDetail = (props: { description: string }) => {
  const color = useColorModeValue("#000000", "#ffffff")

  const html = replaceHexColorsInHTML(props.description, "#000000", color)

  return (
    <Box py="8">
      <Box dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  )
}
