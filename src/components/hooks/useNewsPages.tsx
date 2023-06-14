import {useIndexField, usePageContext} from '@snek-at/jaen'

export const useNewsPages = () => {
  const index = useIndexField({
    jaenPageId: 'JaenPage /wissen/'
  })

  // override index children to exclude a blog page if it is the current page
  const {jaenPage} = usePageContext()

  const children = index.children.filter(
    child => child.id !== jaenPage.id && !child.deleted
  )

  index.children = children

  return index
}
