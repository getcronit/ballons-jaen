import { Box } from "@chakra-ui/react"
import { FC, useRef } from "react"
import { sliderDummyData } from "../../../constant/slider"
import ContentPageSection from "../../ContentPageSection/ContentPageSection"
import FourCard from "../../FourCard/FourCard"
import NewsSlider from "../../NewsSlider/NewsSlider"
import BallonGas from "./BallonGas"
import ProductCatlog from "./ProductCatlog"
import WirGestaltenPartyHero from "./WirGestaltenPartyHero"

interface IWirGestaltenPartyProps {}

const WirGestaltenParty: FC<IWirGestaltenPartyProps> = () => {

  const scrollToTopRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <WirGestaltenPartyHero />
      <ProductCatlog />
      <Box>
      <ContentPageSection />
      </Box>
      <NewsSlider showNewsTitle={true} />
    </>
  )
}
export default WirGestaltenParty
