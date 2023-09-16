import {useContentManagement, useWidget} from '@atsnek/jaen'
import {useEffect, useMemo, useState} from 'react'
import {extractUrlsFromMarkdown} from './BottomNav'

export const useJaenNavTop = () => {
  const {isEditing} = useContentManagement()

  const [menuWidget, setMenuWidget] = useWidget<{
    markdown: string
  }>('topnav', {
    defaultData: {
      markdown: `
   [Inspiriert von der Leichtigkeit eines Ballons, streben wir nach unendlichen Möglichkeiten.](/)
   `
    }
  })

  const markdown = menuWidget?.data?.markdown || ''

  const navLinks: Array<{
    label: string
    to: string
  }> = extractUrlsFromMarkdown(markdown)

  return {
    isEditing,
    navLinks,
    markdown,
    updateNavigation: (markdown: string) => setMenuWidget({markdown})
  }
}

export const useJaenNavBottom = () => {
  const {isEditing} = useContentManagement()

  const [menuWidget, setMenuWidget] = useWidget<{
    markdown: string
  }>('bottomnav', {
    defaultData: {
      markdown: `
[Home](/)
`
    }
  })

  const markdown = menuWidget?.data?.markdown || ''

  const navLinks = useMemo(() => extractUrlsFromMarkdown(markdown), [markdown])

  return {
    isEditing,
    navLinks,
    markdown,
    updateNavigation: (markdown: string) => setMenuWidget({markdown})
  }
}
