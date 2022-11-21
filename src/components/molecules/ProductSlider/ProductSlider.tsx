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
        <Box textAlign="center" my="10">
          <Heading size="xl">{heading}</Heading>
          {/* <BulletIcon
            color="agt.yellow"
            w="unset"
            fontSize="xl"
            mt="5"
            mb="10"
          /> */}
        </Box>
      )}

      <Slider
        captureHorizontalScroll
        p={4}
        spacing={6}
        w="100%"
        elementProps={{
          height: '100%',
          width: 'xs'
        }}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            prefixPath={prefixPath}
            // borderline
            left={0 !== index}
            wholesale={wholesale}
          />
        ))}
      </Slider>
    </>
  )
}
