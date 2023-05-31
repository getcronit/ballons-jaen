import { FC } from 'react';
import AboutBallons from '../AboutUs/AboutBallons';
import AboutHeroSection from '../AboutUs/AboutHeroSection';
import OurCustomers from '../AboutUs/OurCustomers';
import OurTeam from '../AboutUs/OurTeam/OurTeam';
import Contact from '../Contact/Contact';
import ContactBottomSection from '../Contact/ContactBottomSection';

interface IAboutUsProps {}

const ContactAboutUs: FC<IAboutUsProps> = ({}) => {
  return (
    <>
      {/* <AboutHeroSection /> */}
      <Contact />
      <AboutBallons />
      {/* <OurCustomers /> */}
      <OurTeam />
      <ContactBottomSection />
    </>
  );
};
export default ContactAboutUs;
