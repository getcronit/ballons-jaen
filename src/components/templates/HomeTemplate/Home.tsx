import {FC} from 'react'
import NewsSlider from '../../organisms/NewsSlider/NewsSlider'
import HeartSection from './HeartSection/HeartSection'
import Hero from './Hero/Hero'
import ImaginationSection from './ImaginationSection/ImaginationSection'
import JoySection from './JoySection/JoySection'
import LittleThingsSection from './LittleThingsSecton/LittleThingsSection'
import NewsSection from './NewsSection/NewsSection'
import Riesges from './Riesges/Riesges'
import {FeaturedProducts} from './FeaturedProductsSection/FeaturedProductsSection'

import defaultData from '../ProductsTemplate/stories/data'

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  return (
    <>
      <Hero anchor="hero" />
      <Riesges />
      <FeaturedProducts featuredProducts={defaultData.products} productsPagePath={'/products'} heading={"Sortiment"} />
      <HeartSection />
      <LittleThingsSection />
      <JoySection />
      <ImaginationSection />
      <NewsSection />
      <NewsSlider />
    </>
  )
}
export default Home
