import {Field, useField} from '@atsnek/jaen'
import {FC} from 'react'
import {MdLocalPhone, MdLocationPin, MdMail} from 'react-icons/md'
import ContactBottomSection from './ContactBottomSection'
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
