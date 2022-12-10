import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello,  <br />
        World!
      </SectionTitle>
      <SectionText>
        Since the day I wrote my first "Hello, World!" in <strong>C</strong>, programming is growing into my soul relentlessly. Being curious by nature, I'm simply amused by the never ending fun in debugging. If you need a team member with solid dedication and driven by puzzles, keep scrolling!
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/Cetins?tab=repositories'}>My Repositories</Button>
    </LeftSection>
  </Section>
);

export default Hero;