import { Heading, Image, Text, VStack } from "@chakra-ui/react"

import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../../constant/sizes"

interface IMemorySectionProps {}

const MemorySection: FC<IMemorySectionProps> = () => {
  return (
    <VStack
      pos="relative"
      top={{ base: 0, md: "-37.5rem" }}
      mb={{
        base: "0",
        md: "-5.5rem !important",
        lg: "-0rem !important",
        xl: "0 !important",
      }}
    >
      <Image
        w="full"
        src="/images/decorationen/shapes/bg.svg"
        display={{ base: "none", md: "block" }}
      />
      <VStack
        bg={{ base: "none", md: "white" }}
        w="full"
        mt={{ base: "4 !important", md: "-4 !important" }}
        height={{ md: "800px", lg: "1000px", xl: "1200px" }}
      >
        <VStack maxW={CONTAINER_MAX_WIDTH} px="2">
          <Heading
            textAlign="center"
            fontSize={{ base: "md", md: "2xl", lg: "3xl", xl: "4xl" }}
            fontWeight="semibold"
          >
            In
            <Text mx="4" variant="cursive" size="80" as="span">
              Erinnerung
            </Text>
            behalten
          </Heading>

          <Image
            src="/images/decorationen/img1.png"
            mt={{ base: "4 !important", md: "12 !important" }}

            borderRadius={{ base: ".625rem", md: "2rem" }}
            boxShadow="light"
          />
          <Image
            mt={{ base: "8 !important", md: "20 !important" }}
            src="/images/decorationen/img2.png"
            borderRadius={{ base: ".625rem", md: "2rem" }}
            boxShadow="light"
          />
        </VStack>
      </VStack>
    </VStack>
  )
}
export default MemorySection
