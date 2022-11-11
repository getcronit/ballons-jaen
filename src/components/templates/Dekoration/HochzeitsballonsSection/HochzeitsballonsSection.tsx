import { Stack } from "@chakra-ui/react"
import { Field } from "@jaenjs/jaen"
import { FC } from "react"
import FourCard from "../../../FourCard/FourCard"
import BallonsSection1 from "./BallonsSection1"
import BallonsSection2 from "./BallonsSection2"
import ConvincedSection from "./ConvincedSection"
import MemorySection from "./MemorySection"

interface IHochzeitsballonsSectionProps {}

const HochzeitsballonsSection: FC<IHochzeitsballonsSectionProps> = () => {
  const cards = [
    {
      title: "Großhandel",
      image: "/images/decorationen/four_cards/card1.png",
    },
    {
      title: "Party",
      image: "/images/decorationen/four_cards/card2.png",
    },
    {
      title: "Design",
      image: "/images/decorationen/four_cards/card3.png",
    },
    {
      title: "Design",
      image: "/images/decorationen/four_cards/card4.png",
    },
  ]
  const cardsMobile = [
    {
      title: "Hochzeitsballons",
      image: "/images/decorationen/four_cards/card1.png",
    },
    {
      title: "Hochzeitsballons",
      image: "/images/decorationen/four_cards/card2.png",
    },
  ]

  const sectionFieldName = "cardsData"
  const sectionDisplayName = "Test"

  return (
    <Stack pt="32">
      <FourCard sectionFieldName={sectionFieldName} sectionDisplayName={sectionDisplayName} />

      <Field.Section name={sectionFieldName} displayName={sectionDisplayName} sections={[]} />

      <BallonsSection1 />
      <BallonsSection2 />
      <MemorySection />
      <ConvincedSection />
    </Stack>
  )
}
export default HochzeitsballonsSection
