import {useIndexField} from '@snek-at/jaen'

export const useContentPages = () => {
  const index = useIndexField()

  const templates = ['KategorieA', 'KategorieB']

  const children = index.children.filter(
    child => templates.includes(child.template!) && child.deleted !== true
  )

  index.children = children

  return index
}
