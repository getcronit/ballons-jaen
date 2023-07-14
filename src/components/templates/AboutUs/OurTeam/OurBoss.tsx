import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
  chakra
} from '@chakra-ui/react'

import {FC} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../../constant/sizes'
import {Field} from '@snek-at/jaen'
import TopShape from '../../../../common/assets/shapes/top_shape.inline.svg'
import Shape1 from '../../../../common/assets/shapes/shape1.inline.svg'
import CardLine from '../../../../common/assets/card_line.inline.svg'

interface IOurBossProps {
  member: {
    image: string
    name: string
    qoute: string
    qualities: string[]
    isLeft: boolean
    role: string
    about: string
  }
}

const OurBoss: FC<IOurBossProps> = ({
  member: {image, name, qoute, qualities, isLeft, about, role}
}) => {
  isLeft = true

  return (
    <>
      <Box pos="relative">
        {/* <Image
          zIndex='-1'
          position="absolute"
          top={'0'}
          left={'0'}
          transform={'scaley(-1)'}
          w="100%"
          src="/images/home/reisges/top_shape.svg"
          alt="bottom_shape_white"
        /> */}
        <chakra.svg
          as={TopShape}
          borderBottom="solid white"
          borderBottomWidth={80}
          zIndex="-1"
          position="absolute"
          top={'0'}
          left={'0'}
          transform={'scaley(-1)'}
          w="100%"
          height="auto"
        />
        <chakra.svg as={CardLine} pos="absolute" top="0" w="full" h="auto" />
        <Container
          pt="40"
          pb="40"
          display={{base: 'none', md: 'flex'}}
          justifyContent="end"
          maxW={CONTAINER_MAX_WIDTH}>
          <Flex
            align="center"
            flexGrow="1"
            gap="8"
            maxW="78.125rem"
            justify="space-between"
            flexDir="row-reverse">
            <VStack gap="0" flex="1">
              <Grid placeItems="center" pos="relative">
                {/* <Image src="/images/about_us/boss_bg.svg" /> */}
                <chakra.svg
                  as={Shape1}
                  sx={{
                    '#Selection': {
                      fill: '#E3000F',
                      fillOpacity: "0.3"
                    }
                  }}
                  w="45rem"
                  maxW="100%"
                  h="auto"
                  transform="rotate(160deg)"
                  pb="2rem"
                  pl="2rem"
                />
                {/* <Image src={image} pos="absolute" boxShadow="dark" w="70%" borderRadius="full" /> */}
                <AspectRatio
                  ratio={1}
                  pos="absolute"
                  boxShadow="dark"
                  overflow="hidden"
                  w="70%"
                  borderRadius="full">
                  <Field.Image name="image" />
                </AspectRatio>
              </Grid>
              <Field.Text
                name="BossName"
                as={Heading}
                size="h3015"
                fontWeight="semibold"
                //textAlign={{ base: isLeft ? 'start' : 'end' }}
                //fontWeight="semibold"
                defaultValue={name}
              />
            </VStack>
            <Stack flex="1">
              <Field.Text
                name="BossQute"
                as={Heading}
                color="red.500"
                size="h4015"
                fontWeight="semibold"
                //textAlign={{ base: isLeft ? 'start' : 'end' }}
                //fontWeight="semibold"
                defaultValue={qoute}
              />
              {/* {
              <UnorderedList ml="8 !important">
                {qualities.map((quality) => (
                  <ListItem>{quality}</ListItem>
                ))}
              </UnorderedList>
            } */}
              <Field.Text
                name="BossAbout"
                //fontSize="xs"
                //textAlign={{ base: isLeft ? 'start' : 'end' }}
                //fontWeight="semibold"
                //pl="2"
                listStylePosition="inside"
                defaultValue={about}
              />
            </Stack>
          </Flex>
        </Container>

        <Stack
          pb="16"
          pt="4"
          display={{base: 'flex', md: 'none'}}
          px="4"
          gap="0"
          mx="2">
          <Flex>
            <Grid placeItems="center" pos="relative">
              {/* <Image src="/images/about_us/boss_bg.svg" /> */}
              <chakra.svg
                  as={Shape1}
                  sx={{
                    '#Selection': {
                      fill: '#E3000F',
                      fillOpacity: "0.3"
                    }
                  }}
                  w="45rem"
                  maxW="100%"
                  h="auto"
                  transform="rotate(160deg)"
                  pb="2rem"
                  pl="2rem"
                />
              <AspectRatio
                ratio={1}
                pos="absolute"
                boxShadow="dark"
                overflow="hidden"
                w="80%"
                borderRadius="full">
                <Field.Image name="image" />
              </AspectRatio>
            </Grid>
          </Flex>
          <Flex
            align="end"
            flexDir={{base: isLeft ? 'row' : 'row-reverse'}}
            sx={{
              "*": {
                direction: isLeft ? "lrt" : "rtl",
                textAlign: isLeft ? 'left' : 'right'
              }
            }}>
            <Box flex="1">
              {/* <Heading fontSize="md" fontWeight="semibold" color="red.600">
              {name}
              </Heading> */}
              <Field.Text
                name="BossName"
                fontSize="md"
                fontWeight="semibold"
                color="red.600"
                //textAlign={{ base: isLeft ? 'start' : 'end' }}
                //fontWeight="semibold"
                defaultValue={name}
              />
              {/* <Text fontSize="sm" fontWeight="semibold">
              {role}
             </Text> */}
              <Field.Text
                name="BossRole"
                fontSize="sm"
                fontWeight="semibold"
                //fontSize="xs"
                //textAlign={{ base: isLeft ? 'start' : 'end' }}
                //fontWeight="semibold"
                defaultValue={role}
              />
            </Box>
          </Flex>
          <Field.Text
            name="BossAbout"
            fontSize={{
              base: 'sm',
              md: 'md'
            }}
            listStylePosition="inside"
            //fontSize="xs"
            //textAlign={{ base: isLeft ? 'start' : 'end' }}
            //fontWeight="semibold"
            defaultValue={about}
          />
        </Stack>
      </Box>
    </>
  )
}
export default OurBoss
