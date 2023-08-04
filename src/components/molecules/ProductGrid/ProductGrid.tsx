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

export interface ProductGridProps extends SimpleGridProps {
  heading?: string
  products: ShopifyProduct[]
  scrollRestoration?: boolean
  prefixPath?: string
  searchLocation?: string
  wholesale?: boolean
}

export const ProductGrid = ({
  heading,
  products,
  scrollRestoration,
  prefixPath,
  searchLocation,
  wholesale,
  ...gridProps
}: ProductGridProps) => {
  const v = gridProps.columns
    ? useBreakpointValue(gridProps.columns as any)
    : 0 || 0

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

      <SimpleGrid {...gridProps}>
        {products.map((item, index) => {
          return (
            <Box
              id={`product-${item.id}`}
              key={item.id}
              onClick={() => {
                if (scrollRestoration) {
                  window.sessionStorage.setItem(
                    'scrollPosition',
                    window.scrollY.toString()
                  )
                }
              }}>
              <ProductCard
                prefixPath={prefixPath}
                searchLocation={searchLocation}
                product={item}
                left={(index + 1) % v === 0}
                wholesale={wholesale}
              />
            </Box>
          )
        })}
      </SimpleGrid>
    </>
  )
}
