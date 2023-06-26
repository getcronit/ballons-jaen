import {FC} from 'react'
import GroßhandelBottomHero from './GroßhandelBottomHero'
import GroßhandelUpperHero from './GroßhandelUpperHero'

interface IGroßhandelHeroProps {}

const GroßhandelHero: FC<IGroßhandelHeroProps> = () => {
  return (
    <>
      <GroßhandelUpperHero />
      <GroßhandelBottomHero />
    </>
  )
}
export default GroßhandelHero
