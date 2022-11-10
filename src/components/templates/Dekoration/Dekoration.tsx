import { FC } from "react"
import { sliderDummyData } from "../../../constant/slider"
import ContentPageSection from "../../ContentPageSection/ContentPageSection"
import NewsSlider from "../../NewsSlider/NewsSlider"
import DekorationenHero from "./DekorationenHero"
import HochzeitsballonsSection from "./HochzeitsballonsSection/HochzeitsballonsSection"

interface IDekorationensProps {}

const Dekorationens: FC<IDekorationensProps> = () => {
  return (
    <>
      <DekorationenHero />
      <ContentPageSection />
      <NewsSlider
        withoutImageVariant
        showNewsTitle={true}
        slides={sliderDummyData}
      />
    </>
  )
}
export default Dekorationens
