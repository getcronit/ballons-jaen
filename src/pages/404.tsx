import { Text } from "@chakra-ui/react"
import { connectPage } from "@jaenjs/jaen"
import { graphql, PageProps } from "gatsby"
import { Layout } from "../Layout"

const Page = (props: PageProps) => {
    return <Layout pathname={props.path}>
        <Text>
            404
        </Text>
    </Layout>
}

export default connectPage(Page, {
    displayName: "404",
  })
  
  export const query = graphql`
    query ($jaenPageId: String!) {
      ...JaenPageQuery
    }
  `
  