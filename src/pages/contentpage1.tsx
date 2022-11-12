import { connectPage } from "@jaenjs/jaen"
import { graphql, PageProps } from "gatsby"

import ContentPage1 from "../components/templates/Dekoration/Dekoration"
import { Layout } from "../Layout"

const Page = (props: PageProps) => {
  return (
    <Layout pathname={props.path}>
      <ContentPage1 />
    </Layout>
  )
}

export default connectPage(Page, {
  displayName: "ContentPage1",
})

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`
