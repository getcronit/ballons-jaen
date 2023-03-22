/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import {GatsbyBrowser} from 'gatsby'
import {AuthenticationProvider} from './src/services/authentication'
import {PageWrapper} from './src/Wrapper'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element
}) => {
  // return <PageWrapper>{element}</PageWrapper>

  return (
    <PageWrapper>
      <AuthenticationProvider>{element}</AuthenticationProvider>
    </PageWrapper>
  )
}
