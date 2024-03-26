import {Box, Image} from '@chakra-ui/react'
import {FC} from 'react'
import WhiteBoxWithDashBorder from '../../organisms/WhiteBoxWithDashBorder'

interface IContactBottomSectionProps {}

const ContactBottomSection: FC<IContactBottomSectionProps> = () => {
  return (
    <>
      <Box
        bgImage="/images/contact/contact_bg_bottom.svg"
        bgRepeat="no-repeat"
        bgPos={{base: 'left -15rem bottom 0', sm: '0', md: 'unset'}}
        bgSize="cover"
        py={{base: 0, md: 40}}>
        <Box
          pos="relative"
          mx="auto"
          maxW="93.75rem"
          mt={{base: 0, md: '-14', lg: '0'}}
          pt={{base: '40', md: '24', xl: '40'}}
          pb="16"
          overflow="hidden"
          isolation="isolate">
          <Image
            pos="absolute"
            top={{md: '0px'}}
            left={{base: '-3.125rem', md: '0', lg: '0', '2xl': '3.125rem'}}
            maxH={{base: '9.375rem', md: '12.5rem', lg: '15.625rem'}}
            src="/images/decorationen/shapes/shape2.svg"
          />
          <Image
            pos="absolute"
            bottom="0"
            right={{
              base: '-1.875rem',
              md: '3.125rem',
              lg: '3.125rem',
              '2xl': '9.375rem'
            }}
            maxH={{base: '7.5rem', md: '7.5rem', lg: '9.375rem'}}
            transform="rotate(180deg)"
            src="/images/decorationen/shapes/shape2.svg"
          />
          {/* <WhiteBoxWithDashBorder
            titleFieldName="justaskTitle"
            titleDefaultValue="Noch Fragen?"
            textFieldName="justaskText"
            textDefaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor, nisl eget ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl lorem eget lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor."
            button={{
              textFieldName: 'justaskButtonText',
              textDefaultValue: 'Zur Beratung',
              outline: true
            }}
          /> */}
        </Box>
      </Box>
    </>
  )
}
export default ContactBottomSection
