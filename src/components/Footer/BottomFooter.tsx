import { Image, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { Logo } from '../../common/assets/Logo'
import { navigate } from 'gatsby'

interface IBottomFooterProps { }

const BottomFooter: FC<IBottomFooterProps> = () => {
  return (
    <VStack gap="3" my={{base: '10', md: '10'}}>
      <Text
        lineHeight="6"
        fontSize="xs"
        textAlign="center"
        color="white"
        maxW="34.375rem"
        px="4">
        Durch unsere umfangreiche Auswahl, können Sie bei uns von einem
        einzelnen Ballon bis hin zur Festsaal-Dekoration alles bekommen. Ballons
        schaffen es wie nichts anderes, den Menschen ein
        <Text mx="2" fontSize="md" color="white" variant="cursive" as="span">
          Lächeln
        </Text>{' '}
        ins Gesicht zu zaubern.
      </Text>
      {/* <Image
        src="/images/white_logo.svg"
        maxW={{
          base: '15rem'
        }}
      /> */}
      <Logo
        //maxWidth='20rem'
        //height="auto"
        //height=".875rem"
        width="15rem"
        //transform="scale(0.5)"
        objectFit="contain"
        // display={mode === 'website' ? 'block' : 'none'}
        cursor="pointer"
        onClick={() => {
          void navigate('/')
        }}
        color="#FFFFFF"
        alt="logo"
      />
    </VStack>
  )
}
export default BottomFooter
