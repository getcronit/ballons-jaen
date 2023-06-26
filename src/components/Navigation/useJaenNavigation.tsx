import {useStatus, useWidget} from '@snek-at/jaen'
import {useEffect, useMemo, useState} from 'react'
import {extractUrlsFromMarkdown} from './BottomNav'

export const useJaenNavTop = () => {
  const {isEditing} = useStatus()

  const menuWidget = useWidget<{
    markdown: string
  }>('topnav')

  const markdown =
    menuWidget?.data?.markdown ||
    `
  [Inspiriert von der Leichtigkeit eines Ballons, streben wir nach unendlichen Möglichkeiten.](/)
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

export const useJaenNavBottom = () => {
  const {isEditing} = useStatus()

  const menuWidget = useWidget<{
    markdown: string
  }>('bottomnav')

  const markdown =
    menuWidget?.data?.markdown ||
    `
  [Home](/)
  `

  const [navLinks, setNavLinks] = useState<
    Array<{
      label: string
      to: string
    }>
  >([])

  useEffect(() => {
    setNavLinks(extractUrlsFromMarkdown(markdown))
  }, [markdown])

  return {
    isEditing,
    navLinks,
    markdown,
    updateNavigation: (markdown: string) => menuWidget.writeData({markdown})
  }
}
