import {Box} from '@chakra-ui/react'
import {FC} from 'react'
import ContentPageSection from '../../organisms/ContentPageSection/ContentPageSection'
import NewsSlider from '../../organisms/NewsSlider/NewsSlider'
import ProductCatlog from './ProductCatlog'
import WirGestaltenPartyHero from './WirGestaltenPartyHero'

interface IWirGestaltenPartyProps {}

const WirGestaltenParty: FC<IWirGestaltenPartyProps> = () => {
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
