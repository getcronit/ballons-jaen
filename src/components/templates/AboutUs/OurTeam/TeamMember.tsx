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
  Container
} from '@chakra-ui/react';
import { Field, connectBlock, useSectionBlockContext } from '@snek-at/jaen';
import { FC } from 'react';
import { Interface } from 'readline';
import { CONTAINER_MAX_WIDTH } from '../../../../constant/sizes';

interface ITeamMemberProps {
  member: IMember;
}

interface ITeamMemberSectionProps {
  members: IMember[];
}

interface IMember {
  image: string;
  name: string;
  qoute: string;
  qualities: string[];
  isLeft: boolean;
  role: string;
  about: string;
}

const TeamMember: FC<ITeamMemberProps> = ({
  member: { image, name, qoute, qualities, isLeft, about, role },
}) => {
  return (
    <>
      <Flex
        justify={{ md: isLeft ? 'start' : 'end' }}
        py="8"
        display={{ base: 'none', md: 'flex' }}>
        <Flex
          align="center"
          flexDir={{ md: isLeft ? 'row' : 'row-reverse' }}
          flexGrow="1"
          gap="8"
          maxW="71.875rem"
          justify="space-between">
          <VStack>
            <Grid placeItems="center" pos="relative">
              <Image src="/images/about_us/profile_bg.svg" />
              {/* <Image src={image} pos="absolute" boxShadow="dark" w="80%" borderRadius="full" /> */}
              <AspectRatio
                ratio={1}
                pos="absolute"
                boxShadow="dark"
                overflow="hidden"
                w="80%"
                borderRadius="full"
              >
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
              //textAlign={{ base: isLeft ? 'start' : 'end' }}
              //fontWeight="semibold"
              defaultValue={name}
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
              textAlign={{ base: isLeft ? 'start' : 'end' }}
              //fontWeight="semibold"
              defaultValue={qoute}
            />
            {/* <Text fontSize="sm" fontWeight="semibold">
              {role}
            </Text> */}
            <Field.Text
              name="role"
              fontWeight="semibold"
              textAlign={{ base: isLeft ? 'start' : 'end' }}
              //fontWeight="semibold"
              defaultValue={role}
            />
            {/* {
              <UnorderedList ml="8 !important">
                {qualities.map((quality) => (
                  <ListItem>{quality}</ListItem>
                ))}
              </UnorderedList>
            } */}
            <Field.RichText
              name="about"
              //fontSize="xs"
              textAlign={{ base: isLeft ? 'start' : 'end' }}
              //fontWeight="semibold"
              defaultValue={about}
            />
          </Stack>
        </Flex>
      </Flex>

      <Stack py="4" display={{ base: 'flex', md: 'none' }} gap="2">
        <Flex
          align="end"
          flexDir={{ base: isLeft ? 'row' : 'row-reverse' }}
          textAlign={{ base: isLeft ? 'start' : 'end' }}>
          <Box flex="1">
            {/* <Heading fontSize="md" fontWeight="semibold" color="red.600">
              {name}
            </Heading> */}
            <Field.Text
              name="name"
              as={Heading}
              fontSize="md"
              color="red.600"
              fontWeight="semibold"
              //textAlign={{ base: isLeft ? 'start' : 'end' }}
              //fontWeight="semibold"
              defaultValue={name}
            />
            {/* <Text fontSize="sm" fontWeight="semibold">
              {role}
            </Text> */}
            <Field.Text
              name="role"
              fontSize="sm"
              fontWeight="semibold"
              //textAlign={{ base: isLeft ? 'start' : 'end' }}
              //fontWeight="semibold"
              defaultValue={role}
            />
          </Box>
          <Grid placeItems="center" pos="relative" w="38%">
            <Image src="/images/about_us/profile_bg.svg" />
            {/* <Image src={image} pos="absolute" boxShadow="dark" w="80%" borderRadius="full" /> */}
            <AspectRatio
              ratio={1}
              pos="absolute"
              boxShadow="dark"
              overflow="hidden"
              w="80%"
              borderRadius="full"
            >
              <Field.Image name="image" />
            </AspectRatio>
          </Grid>
        </Flex>
        <Field.RichText
          name="about"
          fontSize="xs"
          textAlign={{ base: isLeft ? 'start' : 'end' }}
          //fontWeight="semibold"
          defaultValue={about}
        />
      </Stack>
    </>
  );
};

export default TeamMember;

export const TeamMemberSection = ({
  members
}: ITeamMemberSectionProps) =>
  connectBlock(
    () => {
      const blockContext = useSectionBlockContext()
      const position = blockContext!.position + 1

      console.log('position', position)
      return (
        <Box
          pos={"relative"}
          pt={position % 2 === 0 ? {
            base: '20',
            md: '32'
          } : {
            base: '8',
            md: '12'
          }}
          pb={{
            base: '12',
            md: '20'
          }}
          //bgImage={blockContext!.position % 2 !== 0 ? '/images/about_us/thread1.svg' : undefined}
          bgImage={{
            md:
              position % 3 === 0
                ? '/images/about_us/side_shape.svg'
                : undefined
          }}
          bgRepeat="no-repeat"
          bgPos="right -8rem bottom 0"
          bgSize="20rem"
        >
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
            top={{ base: '-20', md: '-32' }}
            right={"0"}
            h={"100%"}
            w={"100%"}
            pos="absolute"
            bgImage={
              position % 2 === 0
                ? '/images/about_us/thread1.svg'
                : undefined
            }
            bgRepeat="no-repeat"
            bgPos={"0 -20px"}
            bgSize="contain"
          >
          </Box>
          <Container maxW={CONTAINER_MAX_WIDTH}>
            <TeamMember member={{ ...members[blockContext!.position <= 4 ? blockContext!.position : 0], isLeft: blockContext!.position % 2 === 0 }} />
          </Container>
        </Box>
      )
    },
    {
      name: 'TeamMemberSection',
      label: 'TeamMember'
    }
  )
