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
  prefixPath?: string
  searchLocation?: string
  wholesale?: boolean
}

export const ProductGrid = ({
  heading,
  products,
  prefixPath,
  searchLocation,
  wholesale,
  ...gridProps
}: ProductGridProps) => {
  const v = gridProps.columns
    ? useBreakpointValue(gridProps.columns as any)
    : 0 || 0

  const containerRef = useRef(null)

  const location = useLocation()

  // Save the scroll position on unmounting the component
  useEffect(() => {
    return () => {
      if (containerRef.current) {
        sessionStorage.setItem('scrollPosition', containerRef.current.scrollTop)
      }
    }
  }, [location.pathname])

  // Restore the scroll position on mounting the component
  useEffect(() => {
    const scrollPosition = sessionStorage.getItem('scrollPosition')
    if (scrollPosition && containerRef.current) {
      containerRef.current.scrollTop = parseInt(scrollPosition, 10)
    }
  }, [location.pathname])

  return (
    <>
      {heading && (
        <Box textAlign="center" my="10">
          <Heading size="2xl">{heading}</Heading>
        </Box>
      )}

      <SimpleGrid ref={containerRef} {...gridProps}>
        {products.map((item, index) => {
          return (
            <ProductCard
              prefixPath={prefixPath}
              searchLocation={searchLocation}
              product={item}
              key={item.id}
              left={(index + 1) % v === 0}
              wholesale={wholesale}
            />
          )
        })}
      </SimpleGrid>
    </>
  )
}
