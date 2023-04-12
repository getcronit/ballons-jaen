import {ShopifyProduct} from '@snek-at/gatsby-theme-shopify'

export enum ProductFilling {
  AIR_ONLY = 'nur für Luftfüllung geeignet!',
  HELIUM_ONLY = 'für Heliumfüllung geeignet',
  AIR_AND_HELIUM = 'für Helium- und Luftfüllung geeignet'
}

// "{"amount":"4.4521","currency_code":"EUR"}"
type Money = string

export interface ProductMetafields {
  details?: {
    filling: ProductFilling
    sizeHelper: string
    bundle: number
    available: string
    _SU: string
  }
  wholesale?: {
    price: Money
    _SU: string
  }
}

export const getProductMetafields = (product: ShopifyProduct) => {
  const metafields = product.metafields.map(metafield => {
    const {key, value} = metafield
    const {namespace} = metafield

    return {
      [namespace]: {
        [key]: value
      }
    }
  })

  // merge metafields
  const mergedMetafields = metafields.reduce<ProductMetafields>(
    (acc, metafield) => {
      const namespace = Object.keys(metafield)[0] as keyof ProductMetafields
      const key = Object.keys(metafield[namespace])[0]
      const value = metafield[namespace][key]

      return {
        ...acc,
        [namespace]: {
          ...acc[namespace],
          [key]: value
        }
      }
    },
    {}
  )

  return mergedMetafields
}
