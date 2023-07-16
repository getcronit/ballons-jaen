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
        fill: `hsl(${hue}, 100%, 44.5%)`
      }
    }}
    />
  )
}

export default BallonSvg
