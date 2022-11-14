import { Box } from "@chakra-ui/react"
import { FC } from "react"
import NewsSlider from "../../../components/NewsSlider/NewsSlider"
import { sliderDummyData } from "../../../constant/slider"
import BlogPageSection from "../../BlogPageSection/BlogPageSection"
import { BlogFooter } from "./BlogFooter"
import BlogPageHero from "./BlogPageHero"

interface IBlogPageProps {}

const BlogPage: FC<IBlogPageProps> = () => {
  return (
    <>
      <BlogPageHero />
      <BlogPageSection />

      <BlogFooter />
    </>
  )
}
export default BlogPage
