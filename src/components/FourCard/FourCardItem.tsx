import { GridItem } from "@chakra-ui/react"
import { connectSection } from "@jaenjs/jaen"
import CardWithImageBackground from "../../components/CardWithImageBackground"

export const FourCardItem = connectSection(
  () => {
    return (
      <GridItem
        justifySelf="center"
        h={{ base: "8.125rem", md: "16rem", lg: "18rem", xl: "21.875rem" }}
        w="full"
      >
        <CardWithImageBackground
          card={{
            headingFieldName: "title",
            imageFieldName: "fourCardItemImage",
          }}
        />
      </GridItem>
    )
  },
  {
    name: "categoryContent",
    displayName: "FourCardItem",
  }
)
