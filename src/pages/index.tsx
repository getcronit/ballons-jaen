import { connectPage } from "@jaenjs/jaen"
import { graphql, PageProps } from "gatsby"

import HomePage from "../components/templates/Home/Home"
import { Layout } from "../Layout"

const Page = (props: PageProps) => {
  return (
    <Layout pathname={props.path}>
      <HomePage />
    </Layout>
  )
}

export default connectPage(Page, {
  displayName: "Home",
  children: ["ContentPage1", "ContentPage2"],
})

export const query = graphql`
  query ($jaenPageId: String!) {
    jaenPage(id: {eq: $jaenPageId}) {
      ...JaenPageData
      children {
        ...JaenPageData
      }
    }
    allJaenPage {
      nodes {
        ...JaenPageData
        children {
          ...JaenPageData
        }
      }
    }
  }
`
