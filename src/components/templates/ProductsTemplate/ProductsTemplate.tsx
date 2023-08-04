import {Box, Button, Center, Heading} from '@chakra-ui/react'
import {BallonButton} from '../../molecules/BallonButton'
import {
  ProductsPageContext,
  ShopifyProduct
} from '@snek-at/gatsby-theme-shopify'
import React from 'react'
import {useIsInViewport} from '../../../common/utils'

import {ProductGrid} from '../../molecules/ProductGrid'
import SimpleCategorySidebar from './ProductsPageShell'
import {splitAllTags} from './splitAllTags'
import {buildAllTags} from './buildAllTags'

export enum SpecialTagOptions {
  ProductType = 'Typ',
  Vendor = 'Hersteller'
}

export interface ProductsTemplateProps {
  path: string
  products: ShopifyProduct[]
  activeFilters: Partial<{
    tags: ProductsPageContext['tags']
    vendors: ProductsPageContext['vendors']
    productTypes: ProductsPageContext['productTypes']
    minPrice: ProductsPageContext['minPrice']
    maxPrice: ProductsPageContext['maxPrice']
  }>
  isFetching: boolean
  hasNextPage: boolean
  fetchNextPage: () => void
  wholesale: boolean
}

export const ProductsTemplate = (props: ProductsTemplateProps) => {
  const loadMoreButtonRef = React.useRef<HTMLButtonElement>(null)

  const isButtonInViewport = useIsInViewport(loadMoreButtonRef)

  React.useEffect(() => {
    if (isButtonInViewport) {
      loadMoreButtonRef.current?.click()
    }
  }, [isButtonInViewport])

  const allActiveTags = buildAllTags(props.activeFilters)

  // map actie tags in a url encoded string
  const searchLocation = React.useMemo(() => {
    const tags = allActiveTags
      .map(tag => `t=${encodeURIComponent(tag)}`)
      .join('&')

    return tags
  }, [allActiveTags])

  return (
    <Box w="full" pt="4" pl={{base: '2', md: '12'}} pr={{base: '2', md: '12'}}>
      <ProductGrid
        wholesale={props.wholesale}
        products={props.products}
        columns={{base: 1, sm: 2, md: 3, lg: 3, xl: 4, '2xl': 5}}
        spacing={4}
        searchLocation={searchLocation}
      />

      <Center my={4}>
        {props.products.length === 0 && !props.isFetching ? (
          <Heading as="h2" size="lg" mt={4}>
            Keine Artikel gefunden
          </Heading>
        ) : (
          <BallonButton
            ref={loadMoreButtonRef}
            variant="outline"
            py="7 !important"
            onClick={() => {
              if (props.isFetching) return
              props.fetchNextPage()
            }}
            display={!props.hasNextPage ? 'none' : 'flex'}
            isLoading={props.isFetching}>
            Mehr Artikel laden
          </BallonButton>
        )}
      </Center>
    </Box>
  )
}
