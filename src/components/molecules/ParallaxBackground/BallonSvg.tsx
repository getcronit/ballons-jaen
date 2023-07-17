import { HTMLChakraProps, chakra } from '@chakra-ui/react'
import React, {ReactElement, useState} from 'react'



export interface BallonSvgProps
  extends HTMLChakraProps<'svg'> {}

const BallonSvg: React.FC<BallonSvgProps> = (props) => {
  // Initialize with a starting hue
  const [hue, setHue] = useState<number>(356)

  // Define a handler function for the click event
  const handleClick = () => {
    setHue(prevHue => (prevHue + 90) % 360)
  }

  return (
    <chakra.svg onClick={handleClick} {...props}
    sx={{
      'path': {
        cursor: 'crosshair',
        pointerEvents: 'auto',
        fill: `hsl(${hue}, 100%, 44.5%)`,
        transition: 'fill 100ms cubic-bezier(0.68, -0.55, 0.27, 1.55)'
      }
    }}
    />
  )
}

export default BallonSvg
