import { Box, Stack } from "@chakra-ui/react"
import { useField } from "@jaenjs/jaen"
import { FC } from "react"
import { useBasket } from "../../services/basket"
import { useSearch } from "../../services/search"
import { LayoutMode } from "../../types/commonTypes"
import BottomNav from "./BottomNav"
import MobileNav from "./MobileNav/MobileNav"
import TopNav from "./TopNav"

interface INavigationProps {
  mode: LayoutMode
}

const Navigation: FC<INavigationProps> = ({mode}) => {

  const basket = useBasket()
  const search = useSearch()

  const handleOnBasketClick = () => {
    basket.onOpen()
  }

  const handleOnSearchClick = () => {
    search.onOpen()
  }




  return (
    <Box as="nav" zIndex="sticky" pos={
      mode === "website" ? "sticky" : "relative"
    } top="0" bg="white">
      <Stack display={{ base: "none", md: "flex" }} spacing="0">
        <TopNav mode={mode} onSearchClick={handleOnSearchClick} onBasketClick={handleOnBasketClick} />
        {
          mode === 'website' && (
            <BottomNav />
          )
        }
      </Stack>
      <Box as="nav" display={{ base: "block", md: "none" }}>
        <MobileNav mode={mode} onSearchClick={handleOnSearchClick}   onBasketClick={handleOnBasketClick}  />
      </Box>
    </Box>
  )
}
export default Navigation
