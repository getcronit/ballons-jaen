import {FC} from 'react'

import ContentPageSection from '../../organisms/ContentPageSection/ContentPageSection'
import NewsSlider from '../../organisms/NewsSlider/NewsSlider'
import DekorationenHero from './DekorationenHero'

interface IKategorieAProps {}

const KategorieA: FC<IKategorieAProps> = () => {
  return (
    <>
      <DekorationenHero />
      <ContentPageSection />
      <NewsSlider showNewsTitle={true} />
    </>
  )
}
export default KategorieA
