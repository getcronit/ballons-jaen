import { Button } from '@chakra-ui/button'
import { Box, Center, Container, Divider, Heading, HStack } from '@chakra-ui/layout'
import { ShopifyProduct } from '@snek-at/gatsby-theme-shopify'
import { Link as GatsbyLink } from 'gatsby'
import React, { ReactNode } from 'react'

import { getThemeColor } from '../../../../common/utils'
//import { Bullet } from '../../../atoms/Bullet'
import { ProductGrid } from '../../../molecules/ProductGrid'
//import { StickyStrokeLogo } from '../../../molecules/StickyStrokeLogo'
import * as style from './style'
import LinkButtonField from '../../../fields/LinkButtonField'

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
  heading: ReactNode
}

export const FeaturedProducts = ({
  anchor,
  heading,
  featuredProducts,
  productsPagePath
}: FeaturedProductsProps) => {
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
        bg={"white"}
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
          display={{ base: 'none', '2xl': 'block' }}
        />
        <Container position="relative" py="10" maxW="8xl">
          {/* <Box textAlign="center" my="10">
            <Heading size="2xl">{heading}</Heading>
            <Bullet color="agt.yellow" w="unset" fontSize="xl" mt="5" mb="10" />
          </Box> */}
          <ProductGrid
            prefixPath={productsPagePath}
            products={featuredProducts}
            spacing="5"
            columns={{ base: 2, md: 3, xl: 4 }}
          />
          <Center mt="10">
            {/* <Button
              as={GatsbyLink}
              to={productsPagePath}
              color="white"
              borderRadius="5px"
              colorScheme="agt.grayScheme"
              variant="solid"
              size="lg">
              Mehr davon
            </Button> */}
            <HStack
              justify="center"
              gap="4"
              flexDir={{ base: 'row-reverse', md: 'row' }}>
              <LinkButtonField
                name="littleThingsButton1"
                defaultValue="Zum Shop"
                defaultUrl={`/products`}
                size={{ base: 'sm', md: 'md' }}
              />
              <LinkButtonField
                name="littleThingsButton2"
                defaultValue="Großhandel"
                defaultUrl={`/grosshandel`}
                size={{ base: 'sm', md: 'md' }}
                variant="outline"
              />
            </HStack>
          </Center>
        </Container>
      </Box>
    </>
  )
}
