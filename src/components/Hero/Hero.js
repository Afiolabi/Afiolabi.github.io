import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
  I'm pleased to have you on my page, I am Olagunju Isaac Afolabi. I loved to paint, now I find expression in coding and I do it with the same kind of finesse because i discovered, coding is ART!
        </SectionText>
       
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;