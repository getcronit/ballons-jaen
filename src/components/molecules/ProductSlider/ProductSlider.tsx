import {Box, Heading} from '@chakra-ui/react'
import {ShopifyProduct} from '@snek-at/gatsby-theme-shopify'
import {Slider} from '@snek-at/uikit'

import {ProductCard} from '../ProductCard'

export interface ProductSliderProps {
  products: ShopifyProduct[]
  heading?: string
  prefixPath?: string
  wholesale?: boolean
}

export const ProductSlider = ({
  products,
  heading,
  prefixPath,
  wholesale
}: ProductSliderProps) => {
  return (
    <>
      {heading && (
        <Heading size="xl" textAlign="center">
          {heading}
        </Heading>
      )}

      <Slider
        captureHorizontalScroll
        p={4}
        spacing={6}
        w="100%"
        elementProps={{
          height: '100%',
          width: {
            base: '15rem',
            sm: 'xs'
          }
        }}>
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            prefixPath={prefixPath}
            // borderline
            left={index !== 0}
            wholesale={wholesale}
          />
        ))}
      </Slider>
    </>
  )
}
