import {useStatus, useWidget} from '@snek-at/jaen'
import {extractUrlsFromMarkdown} from './BottomNav'

export const useJaenNavigation = () => {
  const {isEditing} = useStatus()

  const menuWidget =
    useWidget<{
      markdown: string
    }>('menu')

  const markdown =
    menuWidget?.data?.markdown ||
    `
  [Home](/)
  `

  const navLinks: Array<{
    label: string
    to: string
  }> = extractUrlsFromMarkdown(markdown)

  return {
    isEditing,
    navLinks,
    markdown,
    updateNavigation: (markdown: string) => menuWidget.writeData({markdown})
  }
}
