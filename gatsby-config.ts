import type {GatsbyConfig} from 'gatsby'
import path from 'path'

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: true,
    PARALLEL_SOURCING: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    FAST_DEV: true
  },
  siteMetadata: {
    title: `ballons-and-ballons`,
    siteUrl: `https://www.yourdomain.tld`
  },
  jsxRuntime: 'automatic',
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
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
    },
    {
      resolve: `gatsby-plugin-jaen`,
      options: {
        snekResourceId: `63571eee-f41c-4745-9130-d746c2cb97a3`,
        googleAnalytics: {
          // trackingIds: ['G-M58K75M9PG']
        }
      }
    }
    // 'gatsby-plugin-webpack-bundle-analyser-v2'
  ]
}

export default config
