import { Grid, GridItem } from "@chakra-ui/react"
import { useJaenPageIndex } from "@jaenjs/jaen"
import { FC } from "react"
import CardWithImageBackground from "../../../../components/CardWithImageBackground"

interface IRiesgesTopSectionProps {}

const RiesgesTopSection: FC<IRiesgesTopSectionProps> = () => {
  const cards = [
    {
      heading: "Großhandel",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing",
      image: "/images/home/reisges/Großhandel.png",
    },
    {
      heading: "Party",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing",
      image: "/images/home/reisges/Party.png",
    },
    {
      heading: "Design",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing",
      image: "/images/home/reisges/Design.png",
    },
  ]

  const index = useJaenPageIndex({
    jaenPageId: "JaenPage /",
  })

  const templates = ["ContentPage1", "ContentPage2"]

  return (
    <Grid
      placeItems="center"
      mb={{ lg: 10 }}
      mt="0"
      gap={{ base: "4", md: "4", lg: "8" }}
      gridTemplateColumns={{
        md: "repeat(auto-fit, minmax(15rem, auto))",
      }}
    >
      {index.children.map((page, i) =>
        templates.includes(page.template || "")
          ? index.withJaenPage(
              page.id || "",
              <GridItem
                justifySelf="center"
                h={{
                  base: "11.25rem",
                  md: "18.75rem",
                  lg: "25rem",
                  xl: "31.25rem",
                }}
                key={i}
              >
                <CardWithImageBackground
                  card={{
                    headingFieldName: `riesgesCardheading${i}`,
                    headingDefaultValue: cards[0].heading,
                    textFieldName: `riesgesCardText${i}`,
                    textDefaultValue: cards[0].text,
                    imageFieldName: `riesgesCardImage${i}`,
                    imageDefaultValue: cards[0].image,
                  }}
                  key={i}
                />
              </GridItem>
            )
          : null
      )}
    </Grid>
  )
}
export default RiesgesTopSection
