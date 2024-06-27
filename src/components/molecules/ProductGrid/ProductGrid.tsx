import {
  Box,
  Heading,
  SimpleGrid,
  SimpleGridProps,
  useBreakpointValue
} from '@chakra-ui/react'
import {ShopifyProduct} from '@snek-at/gatsby-theme-shopify'
import {useScrollRestoration} from 'gatsby'
import {useRef, useEffect} from 'react'
import {useLocation} from '@reach/router'

import {ProductCard} from '../ProductCard'

export interface ProductGridProps {
  mobileSlider?: boolean
  heading?: string
  products: ShopifyProduct[]
  scrollRestoration?: boolean
  prefixPath?: string
  searchLocation?: string
  wholesale?: boolean
}

export const ProductGrid = ({
  mobileSlider,
  heading,
  products,
  scrollRestoration,
  prefixPath,
  searchLocation,
  wholesale
}: ProductGridProps) => {
  useEffect(() => {
    const scrollPosition = window.sessionStorage.getItem('scrollPosition')

    if (scrollPosition && scrollRestoration) {
      window.scrollTo(0, parseInt(scrollPosition))

      window.sessionStorage.removeItem('scrollPosition')
    }
  }, [scrollRestoration])

  return (
    <>
      {heading && (
        <Box textAlign="center" my="10">
          <Heading size="2xl">{heading}</Heading>
        </Box>
      )}

      <SimpleGrid
        overflowX="auto"
        gap="4"
        py="4"
        spacing="4"
        templateColumns={{
          base: !mobileSlider
            ? 'repeat(1, 1fr)'
            : `repeat(${products.length}, 1fr)`,
          md: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)'
        }}>
        {products.map((item, index) => {
          return (
            <ProductCard
              key={item.id}
              prefixPath={prefixPath}
              searchLocation={searchLocation}
              product={item}
              wholesale={wholesale}
            />
          )
        })}
      </SimpleGrid>
    </>
  )
}
