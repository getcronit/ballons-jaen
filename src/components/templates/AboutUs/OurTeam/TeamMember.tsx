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
} from '@chakra-ui/react';
import { FC } from 'react';

interface ITeamMemberProps {
  member: {
    image: string;
    name: string;
    qoute: string;
    qualities: string[];
    isLeft: boolean;
    role: string;
    about: string;
  };
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
              <Image src={image} pos="absolute" boxShadow="dark" w="80%" borderRadius="full" />
            </Grid>
            <Heading size="h3015" fontWeight="semibold">
              {name}
            </Heading>
          </VStack>
          <Stack>
            <Heading color="red.500" size="h4015" fontWeight="semibold">
              {qoute}
            </Heading>
            {
              <UnorderedList ml="8 !important">
                {qualities.map((quality) => (
                  <ListItem>{quality}</ListItem>
                ))}
              </UnorderedList>
            }
          </Stack>
        </Flex>
      </Flex>

      <Stack py="4" display={{ base: 'flex', md: 'none' }} gap="2">
        <Flex
          align="end"
          flexDir={{ base: isLeft ? 'row' : 'row-reverse' }}
          textAlign={{ base: isLeft ? 'start' : 'end' }}>
          <Box flex="1">
            <Heading fontSize="md" fontWeight="semibold" color="red.600">
              {name}
            </Heading>
            <Text fontSize="sm" fontWeight="semibold">
              {role}
            </Text>
          </Box>
          <Grid placeItems="center" pos="relative" w="38%">
            <Image src="/images/about_us/profile_bg.svg" />
            <Image src={image} pos="absolute" boxShadow="dark" w="80%" borderRadius="full" />
          </Grid>
        </Flex>
        <Text fontSize="xs" textAlign={{ base: isLeft ? 'start' : 'end' }}>
          {about}
        </Text>
      </Stack>
    </>
  );
};
export default TeamMember;
