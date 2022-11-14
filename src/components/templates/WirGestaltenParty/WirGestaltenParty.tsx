import { FC } from "react"
import { sliderDummyData } from "../../../constant/slider"
import ContentPageSection from "../../ContentPageSection/ContentPageSection"
import FourCard from "../../FourCard/FourCard"
import NewsSlider from "../../NewsSlider/NewsSlider"
import BallonGas from "./BallonGas"
import ProductCatlog from "./ProductCatlog"
import WirGestaltenPartyHero from "./WirGestaltenPartyHero"

interface IWirGestaltenPartyProps {}

const WirGestaltenParty: FC<IWirGestaltenPartyProps> = () => {
  return (
    <>
      <WirGestaltenPartyHero />
      <ProductCatlog />
      <ContentPageSection />
      <NewsSlider showNewsTitle={true} />
    </>
  )
}
export default WirGestaltenParty
