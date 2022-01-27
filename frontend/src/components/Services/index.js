import React from 'react';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src="./images/home_page/house.svg" />
          <ServicesH2>Housecalls and Farm Visits</ServicesH2>
          <ServicesP>

          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="./images/home_page/calendar-event.svg" />
          <ServicesH2>Barn Days or Exam Clinics</ServicesH2>
          <ServicesP>
            
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="./images/home_page/activity.svg" />
          <ServicesH2>Emergency Visits</ServicesH2>
          <ServicesP>
            
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
