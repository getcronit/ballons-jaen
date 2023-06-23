import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text
} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import {FC, ReactNode} from 'react'
import {MdLocalPhone, MdLocationPin, MdMail} from 'react-icons/md'

interface IContactTimingsProps {}

const ContactTimings: FC<IContactTimingsProps> = ({}) => {
  const timings = [
    {
      day: 'Montag',
      time: '09:00-18:00'
    },
    {
      day: 'Dienstag',
      time: '08:00-16:00'
    },
    {
      day: 'Mittwoch',
      time: '08:00-16:00'
    },
    {
      day: 'Donnerstag',
      time: '08:00-16:00'
    },
    {
      day: 'Freitag',
      time: '10:00-19:00'
    },
    {
      day: 'Samstag',
      time: '10:00-18:00'
    },
    {
      day: 'Sonntag',
      time: 'Geschlossen'
    }
  ]
  return (
    <>
      {' '}
      <Container maxW="80rem">
        <Flex align="center" pos="relative" top={{base: '-5rem', md: '-10rem'}}>
          <Stack
            spacing={{md: 2, lg: 8}}
            flex="1"
            display={{base: 'none', md: 'flex'}}>
            <Field.Text
              as={Heading}
              size="h2418"
              fontWeight="semibold"
              name="timingHeading1"
              defaultValue="Partyshop, Lager, Werkstatt & Büro"
            />
            <Stack spacing={{md: 2, lg: 8}}>
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
          <Stack
            p="10"
            bg="white"
            flex="1"
            boxShadow="dark"
            borderRadius="xl"
            mx={{base: 4, md: '0'}}>
            <Field.Text
              //variant="cursive"
              size="50"
              mb="8"
              textAlign="center"
              name="timingHeading2"
              defaultValue={`<i>Öffnungszeiten</i>`}
            />

            <Stack spacing={{base: 2, md: 6, lg: 8}}>
              {timings.map((item, index) => (
                <Flex key={item.day} justify="space-between" align="flex-end">
                  <Field.Text
                    w={{base: '5rem', lg: '7.5rem'}}
                    size="b2012"
                    name={`timingsDay${index}`}
                    defaultValue={item.day}
                  />
                  <Divider
                    h="1px"
                    bg="black"
                    maxW={{base: '4rem', md: '6rem', lg: '8.2rem'}}
                  />
                  <Field.Text
                    w={{base: '5rem', lg: '8.2rem'}}
                    size="b2012"
                    name={`timingsTime${index}`}
                    defaultValue={item.time}
                  />
                </Flex>
              ))}
            </Stack>
          </Stack>
        </Flex>
      </Container>
    </>
  )
}
export default ContactTimings
