import {Box, Image, chakra} from '@chakra-ui/react'
import {FC} from 'react'
import WhiteBoxWithDashBorder from './WhiteBoxWithDashBorder'
import Shape1 from '../../../common/assets/shapes/shape1.inline.svg'
import Shape2 from '../../../common/assets/shapes/shape2.inline.svg'

interface IConvincedSectionProps {}

const ConvincedSection: FC<IConvincedSectionProps> = () => {
  return (
    <Box>
      <Box
        pos="relative"
        mx="auto"
        maxW="93.75rem"
        mt={{base: 16, md: '-14', lg: '0'}}
        pt={{base: '40', md: '24', xl: '40'}}
        pb="16"
        overflow="hidden">
        <chakra.svg
          as={Shape2}
          pos="absolute"
          top={{md: '0px'}}
          left={{base: '-50px', md: '0', lg: '0', '2xl': '50px'}}
          height="100%"
          maxH={{base: '150px', md: '200px', lg: '250px'}}
          width="auto"
        />
        <chakra.svg
          as={Shape2}
          pos="absolute"
          bottom="0"
          right={{base: '-30px', md: '50px', lg: '50px', '2xl': '150px'}}
          height="100%"
          maxH={{base: '120px', md: '120px', lg: '150px'}}
          width="auto"
          transform="rotate(180deg)"
        />
        <chakra.svg
          as={Shape1}
          pos="absolute"
          top="0"
          right={{base: '-190px', md: '-110px', xl: '-110px', '2xl': '-5'}}
          maxH="18.75rem"
          width="auto"
          transform="rotate(200deg)"
        />
        {/* <Image
          pos="absolute"
          top={{md: '0px'}}
          left={{base: '-50px', md: '0', lg: '0', '2xl': '50px'}}
          maxH={{base: '150px', md: '200px', lg: '250px'}}
          src="/images/decorationen/shapes/shape2.svg"
        />
        <Image
          pos="absolute"
          bottom="0"
          right={{base: '-30px', md: '50px', lg: '50px', '2xl': '150px'}}
          maxH={{base: '120px', md: '120px', lg: '150px'}}
          transform="rotate(180deg)"
          src="/images/decorationen/shapes/shape2.svg"
        />
        <Image
          pos="absolute"
          top="0"
          right={{base: '-180px', md: '-100px', xl: '-100px', '2xl': '0'}}
          maxH="18.75rem"
          transform="rotate(180deg)"
          src="/images/decorationen/shapes/shape.svg"
        /> */}

        <WhiteBoxWithDashBorder
          titleFieldName="ConvincedSection.convincedTitle"
          titleDefaultValue="Überzeugt?"
          textFieldName="ConvincedSection.convincedText"
          textDefaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor, nisl eget ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl lorem eget lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor."
          button={{
            textFieldName: 'ConvincedSection.convincedButtonText',
            textDefaultValue: 'Überzeugt?'
          }}
        />
      </Box>
    </Box>
  )
}
export default ConvincedSection
