import {FC} from 'react'
import {BlogFooter} from './BlogFooter'
import BlogPageHero from './BlogPageHero'
import BlogPageSection from './BlogPageSection'

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
