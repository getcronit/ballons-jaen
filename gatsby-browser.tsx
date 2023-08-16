/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import {GatsbyBrowser} from 'gatsby'

import {Layout} from './src/Layout'
import './src/styles/global.css'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props
}) => {
  if (props.location.pathname.startsWith('/admin')) {
    return <>{element}</>
  }

  return <Layout {...props}>{element}</Layout>
}

// export const shouldUpdateScroll: GatsbyBrowser['shouldUpdateScroll'] = ({
//   routerProps: {location}
// }) => {
//   // check if restoreScroll is set on the location
//   if (location.state?.noScroll) {
//     // if yes, use the state to scroll to the respective position
//     return false
//   }

//   // use default scroll behavior
//   return true
// }
