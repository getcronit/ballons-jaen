import { Container, Grid } from "@chakra-ui/react"
import { Field } from "@jaenjs/jaen"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../constant/sizes"
import { ICardData } from "../../types/commonTypes"
import { FourCardItem } from "./FourCardItem"

interface IFourCardProps {
  sectionFieldName : string
  sectionDisplayName : string
}

const FourCard: FC<IFourCardProps> = ({ sectionFieldName, sectionDisplayName }) => {
  return (
    <Container maxW={CONTAINER_MAX_WIDTH} mb={{ base: 16, md: 0 }}>
  
      <Field.Section
        as={Grid}
        props={{
          placeItems: "center",
          mb: { lg: 10 },
          mt: "0",
          gap: { base: "4", md: "2", lg: "4", xl: 8 },
          display: { base: "grid", md: "none" },
          gridTemplateColumns: {
            md: "repeat(2 , 1fr)",
            lg: "repeat(4 , 1fr)",
          },
        }}
        name={sectionFieldName}
        displayName={sectionDisplayName}
        sections={[FourCardItem]}
      />

      <Field.Section
        as={Grid}
        props={{
          placeItems: "center",
          mb: { lg: 10 },
          mt: "0",
          gap: { base: "4", md: "2", lg: "4", xl: 8 },
          display: { base: "none", md: "grid" },
          gridTemplateColumns: {
            md: "repeat(2 , 1fr)",
            lg: "repeat(4 , 1fr)",
          },
        }}
        name={sectionFieldName}
        displayName={sectionDisplayName}
        sections={[FourCardItem]}
      />


    
    </Container>
  )
}
export default FourCard
