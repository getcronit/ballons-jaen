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

import {ShopifyProduct} from '@snek-at/gatsby-theme-shopify'

interface IHomeProps {
  featuredProducts: ShopifyProduct[]
}

const Home: FC<IHomeProps> = props => {
  return (
    <>
      <Hero anchor="hero" />
      <Riesges />
      <FeaturedProducts
        featuredProducts={props.featuredProducts}
        productsPagePath={'/products'}
      />
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
