import dotenv from 'dotenv';
import path from 'path'

import {GatsbyConfig} from 'gatsby'

const {site} = require('./jaen-data/internal.json')


dotenv.config()

const config: GatsbyConfig = {
  jsxRuntime: "automatic",
  jsxImportSource: "@emotion/react",
  siteMetadata: site.siteMetadata,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    },
    "@jaenjs/jaen"
  ],
}

export default config
