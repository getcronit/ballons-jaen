import type { useJaenPageIndex } from "@jaenjs/jaen"

export interface INewsSlides {
  image: string
  date: string
  title: string
  text: string
}

export interface ICardData {
  image: string
  title?: string
  text?: string
}

export type LayoutMode = 'website' | 'store'

export type JaenPageIndexType = ReturnType<typeof useJaenPageIndex>
