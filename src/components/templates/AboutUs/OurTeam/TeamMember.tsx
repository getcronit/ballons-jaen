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
} from "@chakra-ui/react"
import { Field } from "@jaenjs/jaen"
import { FC } from "react"

interface ITeamMemberProps {
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
  orientation: "left" | "right"
}

const TeamMember: FC<ITeamMemberProps> = ({ member, orientation }) => {
  const isLeft = orientation === "left"

  return (
    <>
      <Flex
        justify={{ md: isLeft ? "start" : "end" }}
        py="8"
        display={{ base: "none", md: "flex" }}
      >
        <Flex
          align="center"
          flexDir={{ md: isLeft ? "row" : "row-reverse" }}
          flexGrow="1"
          gap="8"
          maxW="71.875rem"
          justify="space-between"
        >
          <VStack>
            <Grid placeItems="center" pos="relative">
              <Image src="/images/about_us/profile_bg.svg" />
              <Box
                pos="absolute"
                boxShadow="dark"
                w="80%"
                borderRadius="full"
                overflow={"hidden"}
              >
                <Field.Image
                  name={member.imageFieldName}
                  defaultValue={member.imageDefaultValue}
                />
              </Box>
            </Grid>
            <Heading size="h3015" fontWeight="semibold">
              <Field.Text
                name={member.nameFieldName}
                defaultValue={member.nameDefaultValue}
              />
            </Heading>
          </VStack>
          <Stack>
            <Heading color="red.500" size="h4015" fontWeight="semibold">
              <Field.Text
                name={member.quoteFieldName}
                defaultValue={member.quoteDefaultValue}
              />
            </Heading>
            <Field.Text
              rtf
              name={member.qualificationsFieldName}
              defaultValue={member.qualificationsDefaultValue}
            />
          </Stack>
        </Flex>
      </Flex>

      <Stack py="4" display={{ base: "flex", md: "none" }} gap="2">
        <Flex
          align="end"
          flexDir={{ base: isLeft ? "row" : "row-reverse" }}
          textAlign={{ base: isLeft ? "start" : "end" }}
        >
          <Box flex="1">
            <Heading fontSize="md" fontWeight="semibold" color="red.600">
              <Field.Text
                name={member.nameFieldName}
                defaultValue={member.nameDefaultValue}
              />
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
              <Field.Image
                name={member.imageFieldName}
                defaultValue={member.imageDefaultValue}
              />
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
export default TeamMember
