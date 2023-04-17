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

interface IContactTimingsProps {
  contactDetails: {
    isEditing: boolean
    text: ReactNode
    icon: JSX.Element
    link?: string
  }[]
}

const ContactTimings: FC<IContactTimingsProps> = ({contactDetails}) => {
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
            <Heading size="h2418" fontWeight="semibold">
              <Field.Text
                name="timingHeading1"
                label="Text"
                defaultValue="Partyshop, Lager, Werkstatt & Büro"
                rtf
              />
            </Heading>
            <Stack spacing={{md: 2, lg: 8}}>
              {contactDetails.map((item, index) => (
                <HStack key={index}>
                  <Box fontSize="xl" color="red.500">
                    {item.icon}
                  </Box>{' '}
                  <Text size="b2012" as="span">
                    {!item.isEditing ? (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        as="span">
                        {item.text}
                      </Link>
                    ) : (
                      item.text
                    )}
                  </Text>
                </HStack>
              ))}
            </Stack>
          </Stack>
          <Stack
            p="10"
            bg="white"
            flex="1"
            boxShadow="dark"
            borderRadius="xl"
            mx={{base: 4, md: '0'}}>
            <Text
              variant="cursive"
              size="50"
              mb="8"
              textAlign="center"
              as="span">
              <Field.Text
                name="timingHeading2"
                label="Text"
                defaultValue="Öffnungszeiten"
              />
            </Text>
            <Stack spacing={{base: 2, md: 6, lg: 8}}>
              {timings.map((item, index) => (
                <Flex key={item.day} justify="space-between" align="flex-end">
                  <Text w={{base: '5rem', lg: '7.5rem'}} size="b2012" as="span">
                    <Field.Text
                      name={`timingsDay${index}`}
                      label="Tag"
                      defaultValue={item.day}
                    />
                  </Text>
                  <Divider
                    h="1px"
                    bg="black"
                    maxW={{base: '4rem', md: '6rem', lg: '8.2rem'}}
                  />
                  <Text w={{base: '5rem', lg: '8.2rem'}} size="b2012" as="span">
                    <Field.Text
                      name={`timingsTime${index}`}
                      label="Zeit"
                      defaultValue={item.time}
                    />
                  </Text>
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
