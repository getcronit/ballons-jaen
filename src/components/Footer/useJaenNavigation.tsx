import {useContentManagement, useWidget} from '@atsnek/jaen'

export const extractUrlsFromMarkdown = (
  markdown: string
): Array<{
  label: string
  to: string
}> => {
  const urls = []
  const regex = /\[(.*?)\]\((.*?)\)/g
  let match
  while ((match = regex.exec(markdown))) {
    urls.push({
      label: match[1],
      to: match[2]
    })
  }

  return urls
}

export const useJaenLink = (widgetName: string, defaultValue: string) => {
  const {isEditing} = useContentManagement()

  const [menuWidget, setMenuWidget] = useWidget<{
    markdown: string
  }>(widgetName, {
    defaultData: {
      markdown: defaultValue
    }
  })

  const markdown = menuWidget?.data?.markdown || defaultValue

  const navLinks: Array<{
    label: string
    to: string
  }> = extractUrlsFromMarkdown(markdown)

  return {
    isEditing,
    navLinks,
    markdown,
    updateNavigation: (markdown: string) => {
      setMenuWidget({
        markdown
      })
    }
  }
}

export const useJaenText = (
  widgetName: string,
  defaultValue: Record<string, any>
) => {
  const {isEditing} = useContentManagement()

  const [textWidget, setTextWidget] = useWidget<{
    items: Record<string, any>
  }>(widgetName, {
    defaultData: {
      items: defaultValue
    }
  })

  // const jsonString =
  //   textWidget?.data?.jsonString ||
  //   `{"heading1": "Hello World1", "heading2": "Hello World2", "heading3": "Hello World3", "heading4": "Hello World4"}`

  const items: Record<string, any> = textWidget?.data?.items || defaultValue

  return {
    isEditing,
    data: {...items},
    updateJson: (fieldName: string, itemNext: any) =>
      setTextWidget({
        items: {...items, [fieldName || '']: itemNext}
      })
  }
}
