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
}) => {
  setHtmlAttributes({ lang: `de` })
}

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>
}

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
  return <AuthenticationProvider>{element}</AuthenticationProvider>
}
