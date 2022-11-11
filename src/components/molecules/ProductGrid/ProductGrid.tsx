import {
  Box,
  Heading,
  SimpleGrid,
  SimpleGridProps,
  useBreakpointValue,
} from "@chakra-ui/react"
import { ShopifyProduct } from "@snek-at/gatsby-theme-shopify"
import React from "react"

import { gridPadBoxes } from "../../../common/utils"
import { ProductCard } from "../ProductCard"

export interface ProductGridProps extends SimpleGridProps {
  heading?: string
  products: ShopifyProduct[]
  prefixPath?: string
}

export const ProductGrid = ({
  heading,
  products,
  prefixPath,
  ...gridProps
}: ProductGridProps) => {
  const emptyBoxes = gridPadBoxes(products)

  const v = gridProps.columns
    ? useBreakpointValue(gridProps.columns as any)
    : 0 || 0

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
            <ProductCard
              prefixPath={prefixPath}
              product={item}
              key={index}
              left={0 === (index + 1) % v}
            />
          )
        })}
      </SimpleGrid>
    </>
  )
}
