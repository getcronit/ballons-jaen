import { connectPage } from "@jaenjs/jaen"
import { graphql, PageProps } from "gatsby"

import BlogOverview from "../components/templates/BlogOverview/BlogOverview"
import { Layout } from "../Layout"

const Page = (props: PageProps) => {
  return <Layout pathname={props.path}>
    <BlogOverview />
  </Layout>
}

export default connectPage(Page, {
  displayName: "News",
})

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`
