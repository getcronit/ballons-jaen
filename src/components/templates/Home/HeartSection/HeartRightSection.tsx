import { Grid, GridItem } from "@chakra-ui/react"
import { FC } from "react"
import CardWithImageBackgroundField from "../../../fields/CardWithImageBackgroundField"

interface IHeartRightSectionProps {}

const HeartRightSection: FC<IHeartRightSectionProps> = () => {
  const cards = [
    {
      heading: "Blog Post 1",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing",
      image: "/images/home/heart/hsection2.png",
    },
    {
      heading: "Blog Post 2",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing",
      image: "/images/home/heart/hsection1.png",
    },
    {
      heading: "Blog Post 3",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing",
      image: "/images/home/heart/hsection1.png",
    },
  ]
  return (
    <Grid
      placeItems="center"
      my="8"
      gap={{ base: "4", md: "4", lg: "8" }}
      w={{ base: "100%", lg: "unset" }}
      gridTemplateColumns={{
        md: "repeat(3, 1fr)",

        lg: "repeat(auto-fit, minmax(15.625rem,1fr))",
      }}
    >
      {cards.map((card, i) => (
        <GridItem
          w={{ base: "19.375rem", sm: "80%", md: "100%", lg: "17.875rem" }}
          justifySelf="center"
          h={{ base: "15rem", md: "22.1875rem" }}
          key={i}
        >
          <CardWithImageBackgroundField
            name={`heartCardLink${i}`}
            card={{
              headingFieldName: `heartCardHeading${i}`,
              headingDefaultValue: cards[0].heading,
              textFieldName: `heartCardText${i}`,
              textDefaultValue: cards[0].text,
              imageFieldName: `heartCardImage${i}`,
              imageDefaultValue: cards[0].image,
            }}
            key={i}
          />
        </GridItem>
      ))}
    </Grid>
  )
}
export default HeartRightSection
