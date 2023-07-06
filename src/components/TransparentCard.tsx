import { Box, chakra } from "@chakra-ui/react"

export const TransparentCard = chakra(Box, {
  baseStyle: {
    borderRadius: 'xl',
    background: "rgba(0, 0, 0, 0.1)",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(8px)",
    p: 8,
  },
})
