import {Box, Center, Container, Divider, HStack} from '@chakra-ui/layout'
import {ShopifyProduct} from '@snek-at/gatsby-theme-shopify'
import {ReactNode} from 'react'

//import { Bullet } from '../../../atoms/Bullet'
import {ProductGrid} from '../../../molecules/ProductGrid'
//import { StickyStrokeLogo } from '../../../molecules/StickyStrokeLogo'
import LinkButtonField from '../../../fields/LinkButtonField'
import * as style from './style'
import {useAuth} from '@atsnek/jaen'
import {ProductSlider} from '../../../molecules/ProductSlider'

export interface FeaturedProductsSectionProps {
  name: string
  label: string
  anchor?: string
  featuredProducts: ShopifyProduct[]
  productsPagePath?: string
}

export interface FeaturedProductsProps {
  anchor?: string
  featuredProducts: ShopifyProduct[]
  productsPagePath: string
}

export const FeaturedProducts = ({
  anchor,
  featuredProducts,
  productsPagePath
}: FeaturedProductsProps) => {
  const {user} = useAuth()

  return (
    <>
      {/* '      <StickyStrokeLogo
        strokeColor={getThemeColor('stroke')}
        backgroundColor={getThemeColor('background')}
      />' */}
      <Box
        id={anchor}
        position="relative"
        overflow="hidden"
        bg={'white'}
        css={style.Section}>
        <Divider
          orientation="vertical"
          position="absolute"
          zIndex={-1}
          // w="0"
          // h="100%"
          top="0"
          left="calc(4em + 2.5vw)"
          // borderLeft="1px"
          borderColor="stroke"
          display={{base: 'none', '2xl': 'block'}}
        />
        <Container position="relative" py="10" maxW="8xl">
          {/* <Box textAlign="center" my="10">
            <Heading size="2xl">{heading}</Heading>
            <Bullet color="agt.yellow" w="unset" fontSize="xl" mt="5" mb="10" />
          </Box> */}
          <ProductGrid
            display={{base: 'none', sm: 'grid'}}
            prefixPath={productsPagePath}
            products={featuredProducts}
            spacing="5"
            columns={{base: 2, md: 3, xl: 4}}
            wholesale={!!user}
          />
          <ProductSlider
            h={'100%'}
            display={{base: 'flex', sm: 'none'}}
            //heading="Ähnliche Produkte"
            products={featuredProducts}
            prefixPath="/products"
            wholesale={!!user}
          />
          <Center mt="10" mb="16">
            <LinkButtonField
              name="littleThingsButton1"
              defaultValue="Mehr davon"
              defaultUrl={productsPagePath}
              size={{base: 'sm', md: 'md'}}
            />
          </Center>
        </Container>
      </Box>
    </>
  )
}
