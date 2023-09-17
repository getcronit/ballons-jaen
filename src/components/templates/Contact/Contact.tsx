import {FC} from 'react'
import ContactHero from './ContactHero'
import ContactTimings from './ContactTimings'

interface IContactProps {}

const Contact: FC<IContactProps> = () => {
  return (
    <>
      <ContactHero />
      <ContactTimings />
      {/* <ContactBottomSection /> */}
    </>
  )
}
export default Contact
