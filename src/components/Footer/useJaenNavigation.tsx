import { useIsEditing, useWidget } from "@jaenjs/jaen"

export const extractUrlsFromMarkdown = (
  markdown: string
): {
  label: string
  to: string
}[] => {
  const urls = []
  const regex = /\[(.*?)\]\((.*?)\)/g
  let match
  while ((match = regex.exec(markdown))) {
    urls.push({
      label: match[1],
      to: match[2],
    })
  }


  return urls
}

export const useJaenLink = (widgetName: string, defaultValue: string) => {
  const isEditing = useIsEditing()

  const menuWidget = useWidget<{
    markdown: string
  }>(widgetName)

  const markdown =
    menuWidget?.data?.markdown || defaultValue

  const navLinks: {
    label: string
    to: string
  }[] = extractUrlsFromMarkdown(markdown)

  return {
    isEditing,
    navLinks,
    markdown,
    updateNavigation: (markdown: string) => menuWidget.writeData({ markdown }),
  }
}

export const useJaenText = (
  widgetName: string,
  defaultValue: { [name: string]: any }
) => {
  const isEditing = useIsEditing()

  const textWidget = useWidget<{
    items: { [name: string]: any }
  }>(widgetName)

  // const jsonString =
  //   textWidget?.data?.jsonString ||
  //   `{"heading1": "Hello World1", "heading2": "Hello World2", "heading3": "Hello World3", "heading4": "Hello World4"}`

  const items: { [name: string]: any } = textWidget?.data?.items || defaultValue

  return {
    isEditing,
    data: { ...items },
    updateJson: (fieldName: string, itemNext: any) =>
      textWidget.writeData({
        items: { ...items, [fieldName || ""]: itemNext },
      }),
  }
}
