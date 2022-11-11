import { connectPage } from "@jaenjs/jaen"
import { graphql, PageProps } from "gatsby"

import DekorationPage from "../components/templates/Dekoration/Dekoration"
import { Layout } from "../Layout"

const Page = (props: PageProps) => {
  return (
    <Layout pathname={props.path}>
      <DekorationPage />
    </Layout>
  )
}

export default connectPage(Page, {
  displayName: "Inhaltseite 1",
  children: [],
})

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`
