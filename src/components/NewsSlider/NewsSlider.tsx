import { Box, Text } from "@chakra-ui/react"
import { useJaenPageIndex } from "@jaenjs/jaen"
import { useJaenPageContext } from "@jaenjs/jaen/src/internal-plugins/pages/internal/services/page"
import { FC } from "react"
import Slider from "react-slick"
import { INewsSlides } from "../../types/commonTypes"
import WhiteDesktopSlider from "./WhiteDesktopSlider"
import WhiteMobileSlider from "./WhiteMobileSlider"

interface INewsSlidesProps {
  showNewsTitle?: boolean
}

const NewsSlider: FC<INewsSlidesProps> = ({
  showNewsTitle,
}) => {
  const index = useJaenPageIndex({
    jaenPageId: "JaenPage /news/",
  })

  // override index children to exclude a blog page if it is the current page

  const { jaenPage } = useJaenPageContext()

  const children = index.children.filter(
    (child) => child.id !== jaenPage.id
  )

  index.children = children


  return (
    <>
      <Box px="4" my={{ md: "50", lg: 20 }} display={{
        base: "none",
        md: "block",
      }}>
        <WhiteDesktopSlider showTitle={showNewsTitle} index={index} />
      </Box>

      {/* Form mobile */}
      <Box my="16" display={{ base: "block", md: "none" }}>
        {showNewsTitle && (
          <Text pl="8" variant="cursive" fontSize="xl">
            News
          </Text>
        )}
        <WhiteMobileSlider index={index}
        />
      </Box>
    </>
  )
}
export default NewsSlider
