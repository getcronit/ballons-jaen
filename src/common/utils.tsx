import { Box } from "@chakra-ui/react"

export function uuidv1() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/**
 * Create a array of empty boxes to fill the grid
 * if there are less items than the grid size (6-total).
 *
 * @param items
 * @returns
 */
export function gridPadBoxes(items: any[], gridSize: number = 6, Filler = Box) {
  const toFill = gridSize - (items.length % gridSize || gridSize)

  if (toFill > 0) {
    return Array.from({ length: toFill }, (_, index) => (
      <Filler key={`grid-pad-${index}`} />
    ))
  }
  return []
}

export function replaceHexColorsInHTML(
  html: string,
  coloraHex: string,
  colorbHex: string
) {
  var re = new RegExp(coloraHex, 'g')
  return html.replace(re, colorbHex)
}
