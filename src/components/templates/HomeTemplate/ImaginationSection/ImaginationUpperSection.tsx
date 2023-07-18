import {Box, Heading, Image, Text, VStack, chakra} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import {FC, useRef} from 'react'
import Underline from '../../../../common/assets/underline.inline.svg'
import { useScrollShow } from '../../../hooks/scroll'

interface IImaginationUpperSectionProps {
  sectionRef: React.RefObject<HTMLDivElement>
}

const ImaginationUpperSection: FC<IImaginationUpperSectionProps> = ({sectionRef}) => {
  const {display: displayDesktop} = useScrollShow(-500, undefined, undefined, sectionRef)
  const {display: displayMobile} = useScrollShow(0, undefined, undefined, sectionRef)
  
  return (
    <VStack id="testo">
      <Field.Text
        as={Heading}
        mb={{base: '48', md: '0'}}
        textAlign="center"
        fontSize={{base: 'md', md: 'xl', lg: '2xl'}}
        name="imaginationHeading"
        defaultValue="Was man mit Ballons alles machen kann...<br/>Mit ein wenig Phantasie...?"
      />
      <Box
        pos="relative"
        pt={{base: '8', md: '12'}}
        px={{base: 4, md: '6', lg: '8'}}>
        <Field.Text
          as={Heading}
          opacity={{base: displayMobile ? "1" : "0", md: displayDesktop ? "1" : "0"}}
          transition='all 0.3s ease'
          lineHeight={{base: '3.75rem', lg: '6.25rem'}}
          //variant="cursive"
          fontSize={{base: '4xl', md: '6xl', lg: '8xl'}}
          name="imaginationText"
          defaultValue="<i>Alles</i>"
        />
        {/* <Image
          pos="absolute"
          bottom="0"
          src="/images/home/imagination/underline.svg"
          alt="underline"
        /> */}
        <chakra.svg
          as={Underline}
          position="absolute"
          bottom={'0'}
          left={'0'}
          display={{base: displayMobile ? "block" : "none", md: displayDesktop ? "block" : "none"}}
          sx={{
            path: {
              strokeDasharray: "1000",
              strokeDashoffset: "1000",
              animation: "dash 1s linear 0.5s forwards"
            }
          }}
          w="100%"
          h="auto"
        />
      </Box>
    </VStack>
  )
}
export default ImaginationUpperSection
