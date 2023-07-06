import { Image, VStack } from "@chakra-ui/react"
import { FC } from "react"
import ImaginationBottomSection from "./ImaginationBottomSection"
import ImaginationUpperSection from "./ImaginationUpperSection"

interface IImaginationSectionProps {}

const ImaginationSection: FC<IImaginationSectionProps> = () => {
  return (
    <VStack py="40" gap={{ base: 16, md: 24 }} pos="relative" bg='white'>
      <ImaginationUpperSection />
      <Image
        display={{ base: "block", md: "none" }}
        mt="-10.375rem !important"
        pos="relative"
        top="10.375rem"
        src="/images/home/imagination/grid_upper_line.svg"
      />
      <ImaginationBottomSection />
    </VStack>
  )
}
export default ImaginationSection
