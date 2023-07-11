import {Accordion, Box, Container} from '@chakra-ui/react'
import {FC} from 'react'

import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {MdxContent} from '../../mdx/MdxContent'
import {FaqQuestionAnswer} from './components/FaqQuestionAnswer'
import HeroFaq from './HeroFaq'

interface IFaqProps {}

const Faq: FC<IFaqProps> = () => {
  return (
    <>
      <HeroFaq />
      <Box
        pb={{base: '16rem', md: '10rem', lg: '20rem', xl: '30rem'}}
        bgImage="/images/faq/right_bg.svg"
        bgRepeat="no-repeat"
        bgPos={{
          base: 'right -5rem bottom 0',
          md: 'right -15rem bottom 0',
          '2xl': 'right -20rem bottom 0'
        }}
        bgSize={{base: '55%', sm: '40%', md: '50%'}}>
        <Container maxW={CONTAINER_MAX_WIDTH}>
          <Accordion allowToggle>
            <MdxContent components={{FaqQuestionAnswer}} />
          </Accordion>
        </Container>
      </Box>
      {/* <FaqBallons /> */}
    </>
  )
}
export default Faq
