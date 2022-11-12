import { Box, Text } from "@chakra-ui/react"
import { useJaenPageIndex } from "@jaenjs/jaen"
import { useJaenPageContext } from "@jaenjs/jaen/src/internal-plugins/pages/internal/services/page"
import { FC } from "react"
import Slider from "react-slick"
import { INewsSlides } from "../../types/commonTypes"
import WhiteDesktopSlider from "./WhiteDesktopSlider"
import WhiteMobileSlider from "./WhiteMobileSlider"

interface INewsSlidesProps {
  slides: INewsSlides[]
  showNewsTitle?: boolean
  withoutImageVariant?: boolean
}

const NewsSlider: FC<INewsSlidesProps> = ({
  withoutImageVariant,
  slides,
  showNewsTitle,
}) => {
  const index = useJaenPageIndex({
    jaenPageId: "JaenPage /news/",
  })

  const { jaenPage: myJaenPage } = useJaenPageContext()

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const filteredChildren = index.children.filter(c => c.id !== myJaenPage.id)

  return (
    <>
      <Box px="4" my={{ md: "50", lg: 20 }}>
        <Slider {...settings}>
          {filteredChildren.map((page, i) =>
            index.withJaenPage(
              page.id || "",
              <WhiteDesktopSlider showTitle={showNewsTitle} slides={slides} />
            )
          )}
        </Slider>
      </Box>

      {/* Form mobile */}
      <Box my="16" display={{ base: "block", md: "none" }}>
        {showNewsTitle && (
          <Text pl="8" variant="cursive" fontSize="xl">
            News
          </Text>
        )}
        <WhiteMobileSlider
          withoutImageVariant={withoutImageVariant}
          slides={slides}
        />
      </Box>
    </>
  )
}
export default NewsSlider
