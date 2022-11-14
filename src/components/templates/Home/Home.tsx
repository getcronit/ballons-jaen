import { FC } from "react"
import { sliderDummyData } from "../../../constant/slider"
import NewsSlider from "../../NewsSlider/NewsSlider"
import HeartSection from "./HeartSection/HeartSection"
import Hero from "./Hero/Hero"
import ImaginationSection from "./ImaginationSection/ImaginationSection"
import JoySection from "./JoySection/JoySection"
import LittleThingsSection from "./LittleThingsSecton/LittleThingsSection"
import NewsSection from "./NewsSection/NewsSection"
import Riesges from "./Riesges/Riesges"

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  return (
    <>
      <Hero anchor="hero" />
      <Riesges />
      <HeartSection />
      <LittleThingsSection />
      <JoySection />
      <ImaginationSection />
      <NewsSection />
      <NewsSlider/>
    </>
  )
}
export default Home
