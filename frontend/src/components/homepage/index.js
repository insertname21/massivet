import React, { useState } from 'react';
import { Button } from './ButtonElements';


import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src="https://massivet.s3.us-east-2.amazonaws.com/massie+vet+video.mp4" type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>A mobile vet you can trust</HeroH1>
        <HeroP>
        Serving Jackson, Josephine and Siskiyou Counties with companion animal, livestock and equine care
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='welcome'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
