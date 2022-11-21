/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import { GatsbySSR } from "gatsby"
import { AuthenticationProvider } from "./src/services/authentication"
import { RootWrapper } from "./src/Wrapper"

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHtmlAttributes,
  setHeadComponents
}) => {
  setHtmlAttributes({ lang: `de` })

  setHeadComponents([
    <link
      key="red-buttery"
      rel="preload"
      href="/fonts/red_buttery-webfont.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
  ]);
}

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>
}

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
  return <AuthenticationProvider>{element}</AuthenticationProvider>
}
