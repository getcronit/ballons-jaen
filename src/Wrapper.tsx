import { ChakraProvider } from "@chakra-ui/react"

// import "@fontsource/poppins/100.css"
// import "@fontsource/poppins/200.css"
// import "@fontsource/poppins/300.css"
// import "@fontsource/poppins/400.css"
// import "@fontsource/poppins/500.css"
// import "@fontsource/poppins/600.css"
// import "@fontsource/poppins/700.css"
// import "@fontsource/poppins/800.css"
// import "@fontsource/poppins/900.css"

import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

import "./styles/global.css"

import Fonts from "./styles/fonts"
import theme from "./styles/theme"

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  )
}
