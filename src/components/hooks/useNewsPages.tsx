import {useIndexField, usePageContext} from '@snek-at/jaen'
import {useMemo} from 'react'

export const useNewsPages = (options?: {unlimited?: boolean}) => {
  const index = useIndexField({
    jaenPageId: 'JaenPage /wissen/'
  })

  // override index children to exclude a blog page if it is the current page
  const {jaenPage} = usePageContext()

  // Limit children count to 3 (sort by date)
  const children = index.children
    .filter(child => child.id !== jaenPage.id)
    .sort((a, b) => {
      const aDate = new Date(a.jaenPageMetadata?.datePublished || '')
      const bDate = new Date(b.jaenPageMetadata?.datePublished || '')

      return bDate.getTime() - aDate.getTime()
    })

    // Limit if limit is set
    .slice(0, options?.unlimited ? undefined : 5)

  const {featuredBlog, moreBlogs} = useMemo(() => {
    // The first child is the featured blog

    const featuredBlog = children[0]

    // The rest are the more blogs
    const moreBlogs = children.slice(1)

    return {
      featuredBlog,
      moreBlogs
    }
  }, [children])

  return {
    ...index,
    children,
    featuredBlog,
    moreBlogs
  }
}
