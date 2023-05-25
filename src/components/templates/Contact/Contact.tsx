import { Field, useField } from '@snek-at/jaen'
import { FC } from 'react'
import { MdLocalPhone, MdLocationPin, MdMail } from 'react-icons/md'
import ContactBottomSection from './ContactBottomSection'
import ContactHero from './ContactHero'
import ContactTimings from './ContactTimings'

interface IContactProps { }

const Contact: FC<IContactProps> = () => {
  const contactDetails = [
    {
      isEditing: useField<string>('email', 'IMA:TextField').isEditing,
      text: (
        <Field.Text
          name="address"
          defaultValue="Taborstraße 98, 1020 Wien, Österreich"
        />
      ),
      icon: <MdLocationPin />
    },
    {
      isEditing: useField<string>('email', 'IMA:TextField').isEditing,
      text: (
        <Field.Text
          name="phone"
          defaultValue="+43 2 326 34 25"
        />
      ),
      icon: <MdLocalPhone />,
      link: `tel:${useField<string>('phone', 'IMA:TextField').value?.replace(
        /<[^>]*>?/gm,
        ''
      )}`
    },
    {
      isEditing: useField<string>('email', 'IMA:TextField').isEditing,
      text: (
        <Field.Text
          name="email"
          defaultValue="office@ballons-ballons.at"
        />
      ),
      icon: <MdMail />,
      link: `mailto:${useField<string>('email', 'IMA:TextField').value?.replace(
        /<[^>]*>?/gm,
        ''
      )}`
    }
  ]

  return (
    <>
      <ContactHero contactDetails={contactDetails} />
      <ContactTimings contactDetails={contactDetails} />
      <ContactBottomSection />
    </>
  )
}
export default Contact
