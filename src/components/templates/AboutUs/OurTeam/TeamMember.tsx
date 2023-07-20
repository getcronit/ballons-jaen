import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
  AspectRatio,
  Container,
  chakra
} from '@chakra-ui/react'
import {Field, connectBlock, useSectionBlockContext} from '@snek-at/jaen'
import {FC} from 'react'
import {Interface} from 'readline'
import {CONTAINER_MAX_WIDTH} from '../../../../constant/sizes'
import Shape1 from '../../../../common/assets/shapes/shape1.inline.svg'

interface ITeamMemberProps {
  isLeft: boolean
}

interface ITeamMemberSectionProps {}

interface IMember {
  image: string
  name: string
  qoute: string
  qualities: string[]
  isLeft: boolean
  role: string
  about: string
}

const TeamMember: FC<ITeamMemberProps> = ({isLeft}) => {
  return (
    <>
      <Flex
        justify={{md: isLeft ? 'left' : 'right'}}
        py="8"
        display={{base: 'none', md: 'flex'}}>
        <Flex
          align="center"
          flexDir={{md: isLeft ? 'row' : 'row-reverse'}}
          flexGrow="1"
          gap="8"
          maxW="71.875rem"
          justify="space-between">
          <VStack>
            <Grid placeItems="center" pos="relative">
              {/* <Image src="/images/about_us/profile_bg.svg" /> */}
              <chakra.svg
                as={Shape1}
                sx={{
                  '#Selection': {
                    fill: '#f6f8fa'
                  }
                }}
                w="30rem"
                maxW="100%"
                h="auto"
                pb="1rem"
                transform="rotate(190deg)"
              />
              {/* <Image src={image} pos="absolute" boxShadow="dark" w="80%" borderRadius="full" /> */}
              <AspectRatio
                ratio={1}
                pos="absolute"
                boxShadow="dark"
                overflow="hidden"
                w="75%"
                borderRadius="full">
                <Field.Image name="image" />
              </AspectRatio>
            </Grid>
            {/* <Heading size="h3015" fontWeight="semibold">
              {name}
            </Heading> */}
            <Field.Text
              name="name"
              as={Heading}
              size="h3015"
              fontWeight="semibold"
              //textAlign={{ base: isLeft ? 'left' : 'right' }}
              //fontWeight="semibold"
              defaultValue={'Name'}
            />
          </VStack>
          <Stack>
            {/* <Heading color="red.500" size="h4015" fontWeight="semibold">
              {qoute}
            </Heading> */}
            <Field.Text
              name="qoute"
              as={Heading}
              color="red.500"
              size="h4015"
              fontWeight="semibold"
              textAlign={'left'}
              //fontWeight="semibold"
              defaultValue={'"Quote"'}
            />
            {/* <Text fontSize="sm" fontWeight="semibold">
              {role}
            </Text> */}
            <Field.Text
              name="role"
              fontWeight="semibold"
              textAlign={'left'}
              //fontWeight="semibold"
              defaultValue={'Role'}
            />
            {/* {
              <UnorderedList ml="8 !important">
                {qualities.map((quality) => (
                  <ListItem>{quality}</ListItem>
                ))}
              </UnorderedList>
            } */}
            <Field.Text
              name="about"
              //fontSize="xs"
              textAlign={'left'}
              //fontWeight="semibold"
              listStylePosition="inside"
              defaultValue={'About'}
            />
          </Stack>
        </Flex>
      </Flex>

      <Stack py="4" display={{base: 'flex', md: 'none'}} gap="2">
        <Stack
          justifyContent="center"
          spacing="4"
          boxSize="fit-content"
          mx="auto">
          <Field.Text
            name="qoute"
            textAlign="center"
            as={Heading}
            asAs="h3"
            size="lg"
            color="red.500"
            fontWeight="semibold"
            //fontWeight="semibold"
            defaultValue={'"Quote"'}
          />

          <Grid placeItems="center" pos="relative">
            {/* <Image src="/images/about_us/profile_bg.svg" /> */}
            <chakra.svg
              as={Shape1}
              sx={{
                '#Selection': {
                  fill: '#f6f8fa'
                }
              }}
              w="30rem"
              maxW="100%"
              h="auto"
              transform="rotate(160deg)"
            />
            {/* <Image src={image} pos="absolute" boxShadow="dark" w="80%" borderRadius="full" /> */}
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
        </Stack>
        <Flex
          align="end"
          flexDir={{base: isLeft ? 'row' : 'row-reverse'}}
          textAlign={{base: isLeft ? 'left' : 'right'}}>
          <Box flex="1">
            <Field.Text
              name="name"
              as={Heading}
              fontSize="md"
              fontWeight="semibold"
              //textAlign={{ base: isLeft ? 'left' : 'right' }}
              //fontWeight="semibold"
              defaultValue={'Name'}
            />
            {/* <Text fontSize="sm" fontWeight="semibold">
              {role}
            </Text> */}
            <Field.Text
              name="role"
              fontSize="sm"
              fontWeight="semibold"
              //textAlign={{ base: isLeft ? 'left' : 'right' }}
              //fontWeight="semibold"
              defaultValue={'Role'}
            />
          </Box>
        </Flex>
        <Field.Text
          name="about"
          fontSize={{
            base: 'sm',
            md: 'md'
          }}
          //fontWeight="semibold"
          listStylePosition="inside"
          //transform={'scalex(-1)'}
          sx={{
            '*': {
              direction: isLeft ? 'lrt' : 'rtl',
              textAlign: isLeft ? 'left' : 'right'
            }
          }}
          defaultValue={'About'}
        />
      </Stack>
    </>
  )
}

export default TeamMember

export const TeamMemberSection = connectBlock(
  () => {
    const blockContext = useSectionBlockContext()
    const position = blockContext!.position + 1

    return (
      <Box
        pos={'relative'}
        pt={
          position % 2 === 0
            ? {
                base: '20',
                md: '32'
              }
            : {
                base: '8',
                md: '12'
              }
        }
        pb={{
          base: '12',
          md: '20'
        }}
        //bgImage={blockContext!.position % 2 !== 0 ? '/images/about_us/thread1.svg' : undefined}
        bgImage={{
          md: position % 3 === 0 ? '/images/about_us/side_shape.svg' : undefined
        }}
        bgRepeat="no-repeat"
        bgPos="right -8rem bottom 0"
        bgSize="20rem">
        {/* <Box
            top={position % 5 !== 0 ? { base: '-20', md: '-32' } : '0'}
            right={"0"}
            h={"100%"}
            w={"100%"}
            pos="absolute"
            bgImage={
              position % 5 === 0 
              ? '/images/about_us/shape_thread.svg' 
              : position % 2 === 0 
              ? '/images/about_us/thread1.svg' 
              : undefined
            }
            bgRepeat="no-repeat"
            bgPos={position % 5 !== 0 ? "0 -20px" : "0"}
            bgSize="contain"
          > */}
        <Box
          top={{base: '-20', md: '-32'}}
          right={'0'}
          h={'100%'}
          w={'100%'}
          pos="absolute"
          bgImage={
            position % 2 === 0 ? '/images/about_us/thread1.svg' : undefined
          }
          bgRepeat="no-repeat"
          bgPos={'0 -20px'}
          bgSize="contain"
          pointerEvents="none"></Box>
        <Container maxW={CONTAINER_MAX_WIDTH}>
          <TeamMember isLeft={blockContext!.position % 2 === 0} />
        </Container>
      </Box>
    )
  },
  {
    name: 'TeamMemberSection',
    label: 'TeamMember'
  }
)
