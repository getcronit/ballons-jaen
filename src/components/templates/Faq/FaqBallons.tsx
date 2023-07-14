import {Box, Container, Image} from '@chakra-ui/react'
import {FC} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import WhiteBoxWithDashBorder from '../../organisms/WhiteBoxWithDashBorder'

interface IFaqBallonsProps {}

const FaqBallons: FC<IFaqBallonsProps> = () => {
  return (
    <>
      <Box
        pos="relative"
        top={{base: '-16rem', md: '-10rem', lg: '-18rem', xl: '-24rem'}}
        mb={{base: '-16rem', md: '-10rem', lg: '-18rem', xl: '-24rem'}}
        py="24"
        pt={{base: '10rem', md: '15rem', lg: '20rem', xl: '30rem'}}
        bgSize={{base: '40%', md: '30%'}}
        bgImage="/images/faq/ballon_gift.png"
        bgRepeat="no-repeat"
        bgPos={{
          base: 'left -2rem top 0',
          md: 'left -5rem top 0',
          '2xl': 'left 0 top 0'
        }}>
        <Container maxW={CONTAINER_MAX_WIDTH}>
          <WhiteBoxWithDashBorder
            titleFieldName="faqTitle"
            titleDefaultValue="Brauchst du Hilfe?"
            button={{
              textFieldName: 'faqBallonsButton',
              textDefaultValue: 'Mehr dazu',
              outline: true
            }}
          />
        </Container>
      </Box>
      {/* <Image
        mt={{base: 32, md: 60, xl: 80}}
        src="/images/faq/bottom-bg.svg"
        w="full"
      /> */}
    </>
  )
}
export default FaqBallons
