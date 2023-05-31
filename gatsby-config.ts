import type {GatsbyConfig} from 'gatsby'
import path from 'path'
import {JaenSource} from 'jaen-utils'
import {IJaenPage} from '@snek-at/jaen'

JaenSource.jaenData.read()
const siteUrl = JaenSource.jaenData.internal.siteMetadata.siteUrl

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    title: `ballons-and-ballons`,
    siteUrl: `https://www.yourdomain.tld`
  },
  jsxRuntime: 'automatic',
  plugins: [
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
        snekResourceId: `63571eee-f41c-4745-9130-d746c2cb97a3`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/jaen/admin`, `/_`],
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
          }`,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: {nodes: allPages}
        }: {
          allSitePage: {nodes: IJaenPage[]}
        }) => {
          return allPages.map(page => {
            return {...page}
          })
        },
        serialize: ({path, modifiedGmt}: any) => {
          return {
            url: path,
            lastmod: modifiedGmt
          }
        }
      }
    }
  ]
}

export default config
