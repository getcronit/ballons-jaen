import { Box, Text } from "@chakra-ui/react"
import { FC } from "react"
import { useNewsPages } from "../hooks/useNewsPages"
import WhiteDesktopSlider from "./WhiteDesktopSlider"
import WhiteMobileSlider from "./WhiteMobileSlider"

interface INewsSlidesProps {
  showNewsTitle?: boolean
}

const NewsSlider: FC<INewsSlidesProps> = ({ showNewsTitle }) => {
  const index = useNewsPages()

  return (
    <>
      <Box
        px="4"
        my={{ md: "50", lg: 20 }}
        display={{
          base: "none",
          md: "block",
        }}
      >
        <WhiteDesktopSlider showTitle={showNewsTitle} index={index} />
      </Box>

      {/* Form mobile */}
      <Box my="16" display={{ base: "block", md: "none" }}>
        {showNewsTitle && (
          <Text pl="8" variant="cursive" fontSize="xl">
            News
          </Text>
        )}
        <WhiteMobileSlider index={index} />
      </Box>
    </>
  )
}
export default NewsSlider
