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
} from '@chakra-ui/react';

import { FC } from 'react';
import { CONTAINER_MAX_WIDTH } from '../../../../constant/sizes';
import { Field } from '@snek-at/jaen';

interface IOurBossProps {
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

const OurBoss: FC<IOurBossProps> = ({
  member: { image, name, qoute, qualities, isLeft, about, role },
}) => {
  return (
    <>
      <Container
        pb="40"
        display={{ base: 'none', md: 'flex' }}
        justifyContent="end"
        maxW={CONTAINER_MAX_WIDTH}>
        <Flex
          align="center"
          flexGrow="1"
          gap="8"
          maxW="78.125rem"
          justify="space-between"
          flexDir="row-reverse">
          <VStack gap="4" flex="1">
            <Grid placeItems="center" pos="relative">
              <Image src="/images/about_us/boss_bg.svg" />
              {/* <Image src={image} pos="absolute" boxShadow="dark" w="70%" borderRadius="full" /> */}
              <AspectRatio
                ratio={1}
                pos="absolute"
                boxShadow="dark"
                overflow="hidden"
                w="70%"
                borderRadius="full"
              >
                <Field.Image name="image" />
              </AspectRatio>
            </Grid>
            <Heading size="h3015" fontWeight="semibold">
              {name}
            </Heading>
          </VStack>
          <Stack flex="1">
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
      </Container>

      <Stack pb="16" pt="4" display={{ base: 'flex', md: 'none' }} px="4" gap="2">
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
            <Image src="/images/about_us/boss_bg.svg" />
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
        <Text fontSize="xs" textAlign={{ base: isLeft ? 'start' : 'end' }}>
          {about}
        </Text>
      </Stack>
    </>
  );
};
export default OurBoss;
