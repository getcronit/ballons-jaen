import {Box, Flex, Text, VStack} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import {FC} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import LinkButtonField from '../../fields/LinkButtonField'

interface IBallonGasProps {}

const BallonGas: FC<IBallonGasProps> = () => {
  return (
    <Flex
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
      h={{base: '31.25rem', md: '56.25rem'}}
      bgImage="url('/images/we_design_party/bg_ballon_gas.svg')"
      pos="relative">
      <Flex
        align="center"
        mx="auto"
        justify="space-between"
        maxW={CONTAINER_MAX_WIDTH}
        pos="relative">
        <VStack flex="1" pos={{base: 'unset', md: 'relative'}} top="-5rem">
          <Field.Text
            lineHeight="4rem"
            fontSize={{base: 'xl', md: '4xl', lg: '5xl', xl: '6xl'}}
            //variant="cursive"
            name="BallonGas.title"
            defaultValue={`<i>Ballongas</i>`}
          />
          <Field.Text
            maxW="80%"
            textAlign="center"
            fontSize={{base: 'sm', lg: 'md'}}
            name="BallonGas.titleText"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper.Lo."
          />
          <Box>
            <LinkButtonField
              name="BallonGas.ctaButton"
              size={{base: 'xs', md: 'lg'}}
              mt="4"
              defaultValue="Mehr erfahren"
              defaultUrl="/wissen/helium"
            />
          </Box>
        </VStack>
        <VStack flex="1" display={{base: 'none', md: 'block'}}>
          <Field.Text
            maxW="90%"
            fontSize={{base: 'sm', lg: 'md'}}
            name="BallonGas.titleText_rich"
            defaultValue=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper.Lo."
          />
        </VStack>
      </Flex>
    </Flex>
  )
}
export default BallonGas
