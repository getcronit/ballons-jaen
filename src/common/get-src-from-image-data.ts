import {IGatsbyImageData} from 'gatsby-plugin-image'

/**
 * Extracts the first image source URL from an `IGatsbyImageData` object.
 *
 * @param imageData - An optional `IGatsbyImageData` object representing one or more image sources.
 * @returns The first image URL in the `IGatsbyImageData` object, or a default source URL if an error occurs.
 */
export function getSrcFromImageData(imageData?: IGatsbyImageData): string {
  try {
    if (!imageData) {
      throw new Error('imageData is undefined')
    }

    const {sources, fallback} = imageData.images

    if (fallback) {
      return fallback.src
    }

    if (!sources || sources?.length === 0) {
      throw new Error('imageData.images.sources is empty')
    }

    const firstSourceSet = sources[0].srcSet

    if (!firstSourceSet || firstSourceSet?.length === 0) {
      throw new Error('imageData.images.sources[0].srcSet is empty')
    }

    // Split `srcSet` string into comma-separated parts
    const srcSetParts = firstSourceSet.trim().split(',')

    // Check if `srcSet` string is empty or contains no comma-separated parts
    if (srcSetParts.length === 0) {
      throw new Error('Empty srcSet string')
    }

    // Extract the first part of the `srcSet` string and split it into its URL and width descriptor parts
    const firstSrcSetPart = srcSetParts[0].trim()
    const srcAndWidth = firstSrcSetPart.split(' ')

    // Check if the first part of the `srcSet` string is missing or does not contain a space character
    if (srcAndWidth.length < 2) {
      throw new Error(`Invalid srcSet part: ${firstSrcSetPart}`)
    }

    // Extract the image URL from the first part of the `srcSet` string
    const src = srcAndWidth[0].trim()

    // Check if the extracted image URL is missing or not a string
    if (!src || typeof src !== 'string') {
      throw new Error(`Invalid src URL: ${src}`)
    }

    // Return the extracted image URL
    return src
  } catch (error: any) {
    console.warn(`Error in getSrcFromImageData: ${error.message}`, imageData)
    // Return a default source URL if an error occurs
    return '/default-image.png'
  }
}
