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
        remote: {
          repository: 'atsnek/jaen-starter'
        },
        zitadel: {
          organizationId: '257964756269268995',
          clientId: '252746210698395651@services',
          authority: 'https://accounts.cronit.io',
          redirectUri: 'http://localhost:8000'
        },
        googleAnalytics: {
          trackingIds: ['G-M58K75M9PG']
        },
        sentry: {
          org: 'cronit',
          project: 'jaen-my-gatsby-site',
          dsn: 'https://de076d4e9960db9c63261282df7df44e@o4506263462871040.ingest.us.sentry.io/4506905935806464'
        }
      }
    },
    `gatsby-jaen-mailpress`
    // 'gatsby-plugin-webpack-bundle-analyser-v2'
  ]
}

export default config
