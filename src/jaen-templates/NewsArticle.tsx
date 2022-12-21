import { connectTemplate } from "@jaenjs/jaen"
import { graphql, PageProps } from "gatsby"
import BlogPage from "../components/templates/BlogPage/BlogPage"

import { Layout } from "../Layout"

const Page = (props: PageProps) => {
  return (
    <Layout pathname={props.path}>
      <BlogPage />
    </Layout>
  )
}

export default connectTemplate(Page, {
  displayName: "Newsartikel",
  children: [],
})

export const query = graphql`
  query ($jaenPageId: String!) {
    jaenPage(id: { eq: $jaenPageId }) {
      ...JaenPageData
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
