import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import {FC, ReactNode} from 'react'
import {MdLocalPhone, MdLocationPin, MdMail} from 'react-icons/md'

import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {GoogleMaps} from '../../molecules/GoogleMaps'

interface IContactHeroProps {}

const ContactHero: FC<IContactHeroProps> = ({}) => {
  return (
    <>
      {' '}
      <Box
        bgImage="/images/contact/bg.svg"
        bgRepeat="no-repeat"
        bgSize={{base: '70%', md: 'auto'}}
        bgPos={{base: 'left -6rem top 0', md: 'left -10rem top 0'}}>
        <Container maxW={CONTAINER_MAX_WIDTH} mt="20" pb="10">
          <VStack spacing={{base: 8, md: 20}}>
            <Flex gap={{base: 2, md: 4}}>
              <Field.Text
                as={Heading}
                size="h5020"
                fontWeight="semibold"
                whiteSpace="nowrap"
                name="heading1"
                defaultValue="Mitten in <i>Wien</i>"
              />
            </Flex>
            <Stack
              spacing={{base: 4, lg: 8}}
              flex="1"
              display={{base: 'flex', md: 'none'}}>
              <Field.Text
                as={Heading}
                size="h2415"
                fontWeight="semibold"
                name="heading2"
                defaultValue="Partyshop, Lager, Werkstatt & Büro"
              />
              <Stack spacing={{base: 4, lg: 8}}>
                <HStack>
                  <Box fontSize="xl" color="red.500">
                    <MdLocationPin />
                  </Box>
                  <Field.Text
                    name="address"
                    defaultValue="Taborstraße 98, 1020 Wien, Österreich"
                    size="b2012"
                  />
                </HStack>

                <HStack>
                  <Box fontSize="xl" color="red.500">
                    <MdLocalPhone />
                  </Box>
                  <Field.Text
                    name="phone"
                    defaultValue="+43 2 326 34 25"
                    size="b2012"
                  />
                </HStack>

                <HStack>
                  <Box fontSize="xl" color="red.500">
                    <MdMail />
                  </Box>
                  <Field.Text
                    name="email"
                    defaultValue="office@ballons-ballons.at"
                    size="b2012"
                  />
                </HStack>
              </Stack>
            </Stack>
            <Box
              mt={{base: '20 !important', md: '0'}}
              mb="8"
              h="xl"
              w="full"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="dark">
              <GoogleMaps
                objectFit="cover"
                h="full"
                w="100%"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10631.849472718279!2d16.3863148!3d48.2265992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab1f506f04a7844b!2sBalloons%20%26%20balloon%20e.U.!5e0!3m2!1sen!2sat!4v1668436597952!5m2!1sen!2sat"
              />
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  )
}
export default ContactHero
