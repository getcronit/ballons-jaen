import { Box } from "@chakra-ui/react"
import { FC } from "react"
import NewsSlider from "../../../components/NewsSlider/NewsSlider"
import { sliderDummyData } from "../../../constant/slider"
import BlogPageSection from "../../BlogPageSection/BlogPageSection"
import BlogPageHero from "./BlogPageHero"
import BlogSlider from "./BlogSlider"
import ThreeCardBlog from "./ThreeCardBlog"


interface IBlogPageProps {}

const BlogPage: FC<IBlogPageProps> = () => {
  return (
    <>
      <BlogPageHero />
      <BlogPageSection />
      <BlogSlider />
      <Box py="16">
        <NewsSlider
          withoutImageVariant
          showNewsTitle={true}
          slides={sliderDummyData}
        />
      </Box>
    </>
  )
}
export default BlogPage
