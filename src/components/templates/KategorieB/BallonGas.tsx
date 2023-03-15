import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"

interface IBallonGasProps {}

const BallonGas: FC<IBallonGasProps> = () => {
  return (
    <Flex
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
      h={{ base: "31.25rem", md: "56.25rem" }}
      bgImage="url('/images/we_design_party/bg_ballon_gas.svg')"
      pos="relative"
    >
      <Flex
        align="center"
        mx="auto"
        justify="space-between"
        maxW={CONTAINER_MAX_WIDTH}
        pos="relative"
      >
        <VStack flex="1" pos={{ base: "unset", md: "relative" }} top="-5rem">
          <Text
            lineHeight="4rem"
            fontSize={{ base: "xl", md: "4xl", lg: "5xl", xl: "6xl" }}
            variant="cursive"
            as="span"
          >
            Ballons
          </Text>
          <Text
            maxW="80%"
            textAlign="center"
            fontSize={{ base: "sm", lg: "md" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper.Lo.
          </Text>
          <Box>
            <Button size={{ base: "xs", md: "lg" }} mt="4">
              Mehr erfahren
            </Button>
          </Box>
        </VStack>
        <VStack flex="1" display={{ base: "none", md: "block" }}>
          <Text maxW="90%" fontSize={{ base: "sm", lg: "md" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
            sit amet, consectetur adi
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper Lorem i
          </Text>
        </VStack>
      </Flex>
    </Flex>
  )
}
export default BallonGas
