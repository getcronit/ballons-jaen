import {useJaenPageIndex} from '@atsnek/jaen'

export const useContentPages = () => {
  const index = useJaenPageIndex()

  const templates = new Set([
    'JaenTemplate KategorieA',
    'JaenTemplate KategorieB'
  ])

  const children = index.childPages.filter(
    child =>
      (child.template && templates.has(child.template)) ||
      child.id === 'JaenPage /grosshandel/'
  )

  return {
    ...index,
    children
  }
}
