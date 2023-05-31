import {Box, BoxProps, Tooltip} from '@chakra-ui/react'
import {useRef, useState, useEffect} from 'react'

export const OverflownText: React.FC<
  {
    children: React.ReactNode
  } & BoxProps
> = ({children, ...props}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isOverflown, setIsOverflown] = useState(false)
  useEffect(() => {
    const element = ref.current!
    setIsOverflown(element.scrollWidth > element.clientWidth)
  }, [])

  return (
    <Tooltip label={children} isDisabled={!isOverflown}>
      <Box position="relative" isTruncated ref={ref} {...props}>
        {children}
      </Box>
    </Tooltip>
  )
}
