import {Box, Container, Flex, Heading, Stack, Text} from '@chakra-ui/react'
import {Field} from '@atsnek/jaen'
import {FC} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import LinkButtonField from '../../fields/LinkButtonField'

interface IProductCatlogProps {}

const ProductCatlog: FC<IProductCatlogProps> = () => {
  return (
    <Box
      bgImage="url('/images/großhandel/großhandel_bg.svg')"
      bgSize="100%,contain"
      bgRepeat="no-repeat"
      bgPos={{
        base: 'bottom 0 left 0',
        md: 'bottom 0 left 0'
      }}
      py="28">
      <Container
        maxW={CONTAINER_MAX_WIDTH}
        pos="relative"
        //top={{ base: '-3rem', md: '-6.25rem', lg: '-12.5rem' }}
        //mb={{ base: '1rem', md: '-4.25rem', lg: '-10.5rem' }}
      >
        <Flex gap="12" align="center" flexDir={{base: 'column', lg: 'row'}}>
          <Box
            borderRadius="xl"
            overflow="hidden"
            flex="1"
            w={{base: '70%'}}
            h={{
              base: '30rem',
              sm: '31.25rem',
              md: '35rem',
              lg: '40rem'
            }}>
            <Field.Image name="stack_cards" lightbox />
          </Box>
          {/* <Box display={{ base: 'block', md: 'none' }}>
            <LinkButtonField
              name="catalogueButton"
              defaultValue={'Zum Katalog'}
              defaultUrl={`/products`}
              variant="outline"
            />
          </Box> */}
          <Stack
            display="flex"
            flex="1"
            pl={{base: '4rem', xl: '9rem'}}
            pb={{base: '2rem', xl: '5rem'}}
            pt="3.125rem"
            pr="1.25rem"
            bg="white"
            boxShadow="light"
            borderRadius="xl">
            <Field.Text
              as={Heading}
              fontSize={{base: 'md', md: 'lg', xl: 'xl'}}
              fontWeight="semibold"
              name="cataloguePreTitle"
              defaultValue={'Katalog'}
            />
            <Field.Text
              as={Heading}
              fontSize={{base: 'md', md: 'xl', lg: '2xl', xl: '3xl'}}
              fontWeight="semibold"
              name="catalogueTitle"
              defaultValue="Unsere <i>Kataloge</i>"
            />
            <Field.Text
              fontSize={{base: 'sm', lg: 'md'}}
              name="catalogueText"
              defaultValue={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam, atque iusto culpa libero nostrum sit fuga cumque sunt tenetur! Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
              }
            />
            <Box>
              <LinkButtonField
                name="catalogueButton"
                defaultValue={'Zum Katalog'}
                defaultUrl={`/products`}
                size="sm"
                variant="outline"
                mt="4"
              />
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}
export default ProductCatlog
