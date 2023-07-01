import {useIndexField} from '@snek-at/jaen'
import {useMemo} from 'react'

export const useContentPages = () => {
  const index = useIndexField()

  const templates = new Set(['KategorieA', 'KategorieB'])

  const children = index.children.filter(
    child =>
      (child.template && templates.has(child.template)) ||
      child.id === 'JaenPage /grosshandel/'
  )

  return {
    ...index,
    children
  }
}
