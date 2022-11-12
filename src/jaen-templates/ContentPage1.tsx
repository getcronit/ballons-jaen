import { connectTemplate } from "@jaenjs/jaen"
import { graphql, PageProps } from "gatsby"

import ContentPage1 from "../components/templates/Dekoration/Dekoration"
import { Layout } from "../Layout"

const Page = (props: PageProps) => {
  return <Layout pathname={props.path}>
    <ContentPage1 />
  </Layout>
}

export default connectTemplate(Page, {
    displayName: "Inhaltseite 1",
    children: [],
})


export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`