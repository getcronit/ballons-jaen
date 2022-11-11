import { connectPage } from "@jaenjs/jaen"
import { graphql, PageProps } from "gatsby"

import WirGestaltenParty from "../components/templates/WirGestaltenParty/WirGestaltenParty"
import { Layout } from "../Layout"

const Page = (props: PageProps) => {
  return (
    <Layout pathname={props.path}>
      <WirGestaltenParty />
    </Layout>
  )
}

export default connectPage(Page, {
  displayName: "Luftballons",
})

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`
