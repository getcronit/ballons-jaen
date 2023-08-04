/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import {GatsbySSR} from 'gatsby'
import {Layout} from './src/Layout'
import {AuthenticationProvider} from './src/services/authentication'
import {PageWrapper} from './src/Wrapper'

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHtmlAttributes,
  setHeadComponents
}) => {
  setHtmlAttributes({lang: `de`})

  setHeadComponents([
    <link
      key="red-buttery"
      rel="preload"
      href="/fonts/red_buttery-webfont.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
  ])
}

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props
}) => {
  if (props.location.pathname.startsWith('/admin')) {
    return <>{element}</>
  }

  return <Layout {...props}>{element}</Layout>
}
