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
          repository: 'ballonsballons-at/ballons-jaen'
        },
        zitadel: {
          organizationId: '257964756269268995',
          clientId: '252746210698395651@services',
          authority: 'https://accounts.cronit.io',
          redirectUri:
            process.env.NODE_ENV === 'production'
              ? 'https://ballons-ballons.at'
              : 'http://localhost:8000'
        },
        googleAnalytics: {
          trackingIds: ['G-M58K75M9PG']
        },
        sentry: {
          org: 'cronit',
          project: 'ballons-ballons',
          dsn: 'https://ace8c79e4c444168727fc5375ea5c27f@sentry.cronit.io/3'
        }
      }
    },
    `gatsby-jaen-mailpress`
    // 'gatsby-plugin-webpack-bundle-analyser-v2'
  ]
}

export default config
