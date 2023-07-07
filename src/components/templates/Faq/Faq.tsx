import { FC } from "react"
import FaqBallons from "./FaqBallons"
import FaqQuestionAnswer from "./FaqQuestionAnswer"
import HeroFaq from "./HeroFaq"
import { MdxContent } from "../../mdx/MdxContent"

interface IFaqProps {}

const Faq: FC<IFaqProps> = () => {
  return (
    <>
      <HeroFaq />
      {/* <FaqQuestionAnswer /> */}
      <MdxContent />
      {/* <FaqBallons /> */}
    </>
  )
}
export default Faq
