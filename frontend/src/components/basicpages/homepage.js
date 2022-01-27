import React, { useState } from 'react';
import HeroSection from '../homepage';
import Carousel from '../Carousel';
import Services from '../Services';
import InfoSection from '../InfoSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from '../InfoSection/Data';


function Home() {

  return (
    <>
      <HeroSection />
      
      <InfoSection {...homeObjTwo} />
      
      <InfoSection {...homeObjThree} />

      <Services />

      <Carousel />
    </>
  );
}

export default Home;