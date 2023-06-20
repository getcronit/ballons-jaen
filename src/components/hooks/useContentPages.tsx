import {useIndexField} from '@snek-at/jaen'
import {useMemo} from 'react'

export const useContentPages = () => {
  const index = useIndexField()

  const templates = ['KategorieA', 'KategorieB']

  const children = index.children.filter(
    child => templates.includes(child.template!) && child.deleted !== true
  )

  const memoedIndex = useMemo(() => {
    return {
      ...index,
      children: [
        ...children,
        {
          id: 'JaenPage /grosshandel/',
          slug: 'grosshandel'
        }
      ]
    }
  }, [index, children])

  return memoedIndex
}
