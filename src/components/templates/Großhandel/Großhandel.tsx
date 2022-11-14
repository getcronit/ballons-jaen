import { FC } from "react"
import NewsSlider from "../../../components/NewsSlider/NewsSlider"
import { sliderDummyData } from "../../../constant/slider"
import AdviceSection from "./AdviceSection"
import Brands from "./Brands"
import GroßhandelHero from "./GroßhandelHero/GroßhandelHero"
import PartnersSection from "./PartnersSection"
import TwoCards from "./TwoCards"

interface IGroßhandelProps {}

const Großhandel: FC<IGroßhandelProps> = () => {
  return (
    <>
      <GroßhandelHero />
      <TwoCards />
      <Brands />
      <AdviceSection />
      <PartnersSection />
      <NewsSlider showNewsTitle={true} />
    </>
  )
}
export default Großhandel
