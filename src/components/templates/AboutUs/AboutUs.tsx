import { FC } from 'react';
import AboutBallons from './AboutBallons';
import AboutHeroSection from './AboutHeroSection';
import OurCustomers from './OurCustomers';
import OurTeam from './OurTeam/OurTeam';

interface IAboutUsProps {}

const AboutUs: FC<IAboutUsProps> = ({}) => {
  return (
    <>
      <AboutHeroSection />
      <AboutBallons />
      <OurCustomers />
      <OurTeam />
    </>
  );
};
export default AboutUs;
