import type {GatsbyConfig} from 'gatsby'
import path from 'path'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ballons-and-ballons`,
    siteUrl: `https://www.yourdomain.tld`
  },
  jsxRuntime: 'automatic',
  plugins: [
    {
      resolve: `gatsby-plugin-jaen`,
      options: {
        snekResourceId: `236d377c-cd47-497a-a74c-9101f6fced60`
      }
    },
    {
      resolve: '@snek-at/gatsby-theme-shopify',
      options: {
        productPageTemplate: path.resolve(
          'src/templates/ProductPageTemplate.tsx'
        ),
        productsPageTemplate: path.resolve(
          'src/templates/ProductsPageTemplate.tsx'
        )
      }
    }
  ]
}

export default config
