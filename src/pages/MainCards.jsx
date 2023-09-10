import React from 'react';
import HeroSection from '../Components/Hero/HeroSection';
import AboutSection from '../Components/AuthCards/AboutSection';
import IndexCard from '../Components/AuthCards/IndexCard';
import EndSection from '../Components/AuthCards/EndSection';
import IndexCarousel from '../Components/Carousel/IndexCarousel';

const MainCard = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <IndexCard />
      <EndSection />
      <IndexCarousel />
    </div>
  );
};
export default MainCard;
