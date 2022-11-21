import { Box } from "@chakra-ui/react"
import React from "react"

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
  var re = new RegExp(coloraHex, "g")
  return html.replace(re, colorbHex)
}

export function useIsInViewport(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIsIntersecting] = React.useState(false)

  const observer = React.useMemo(() => {
    if (typeof window !== "undefined") {
      return new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      )
    }
  }, [])

  React.useEffect(() => {
    if (ref.current) {
      observer?.observe(ref.current)

      return () => {
        observer?.disconnect()
      }
    }
  }, [ref, observer])

  return isIntersecting
}

export function removeHtmlFromString(htmlString: string) {
  // remove sourounding <p></p> tags of htmlString
  const htmlStringWithoutP = htmlString.replace(/^<p>|<\/p>$/g, "")

  // decode all html entities
  const decodedHtmlString = htmlStringWithoutP.replace(/&amp;/g, "&")

  return decodedHtmlString
}
