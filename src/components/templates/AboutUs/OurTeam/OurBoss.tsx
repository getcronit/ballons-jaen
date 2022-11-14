import {
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
} from "@chakra-ui/react"
import { Field } from "@jaenjs/jaen"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../../constant/sizes"

interface IOurBossProps {
  member: {
    imageFieldName: string
    imageDefaultValue: string
    nameFieldName: string
    nameDefaultValue: string
    quoteFieldName: string
    quoteDefaultValue: string
    qualificationsFieldName: string
    qualificationsDefaultValue: string
  }
}

const OurBoss: FC<IOurBossProps> = ({
  member,
}) => {
  return (
    <>
      <Container
        pb="40"
        display={{ base: "none", md: "flex" }}
        justifyContent="end"
        maxW={CONTAINER_MAX_WIDTH}
      >
        <Flex
          align="center"
          flexGrow="1"
          gap="8"
          maxW="78.125rem"
          justify="space-between"
          flexDir="row-reverse"
        >
          <VStack gap="4" flex="1">
            <Grid placeItems="center" pos="relative">
              <Image src="/images/about_us/boss_bg.svg" />

              <Box
                pos="absolute"
                boxShadow="dark"
                w="70%"
                borderRadius="full"
                overflow={"hidden"}
              >
                <Field.Image name={member.imageFieldName} defaultValue={member.imageDefaultValue} />
                </Box>

            
            </Grid>
            <Heading size="h3015" fontWeight="semibold">
              <Field.Text name={member.nameFieldName} defaultValue={member.nameDefaultValue} />

            </Heading>
          </VStack>
          <Stack flex="1">
            <Heading color="red.500" size="h4015" fontWeight="semibold">
              <Field.Text name={member.quoteFieldName} defaultValue={member.quoteDefaultValue} />
            </Heading>
            <Field.Text name={member.qualificationsFieldName} defaultValue={member.qualificationsDefaultValue} />
          </Stack>
        </Flex>
      </Container>

      <Stack
        pb="16"
        pt="4"
        display={{ base: "flex", md: "none" }}
        px="4"
        gap="2"
      >
        <Flex
          align="end"
          flexDir={{ base: "row-reverse" }}
          textAlign={{ base:  "end" }}
        >
          <Box flex="1">
            <Heading fontSize="md" fontWeight="semibold" color="red.600">
            <Field.Text name={member.nameFieldName} defaultValue={member.nameDefaultValue} />
            </Heading>
           
          </Box>
          <Grid placeItems="center" pos="relative" w="38%">
            <Image src="/images/about_us/profile_bg.svg" />

            <Box
              pos="absolute"
              boxShadow="dark"
              w="80%"
              borderRadius="full"
              overflow={"hidden"}
            >
              <Field.Image name={member.imageFieldName} defaultValue={member.imageDefaultValue} />
            </Box>


          </Grid>
        </Flex>
        <Text fontSize="xs" textAlign={{ base: "end" }}>
          <Field.Text name={member.qualificationsFieldName} defaultValue={member.qualificationsDefaultValue} />
        </Text>
      </Stack>
    </>
  )
}
export default OurBoss
