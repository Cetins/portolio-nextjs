import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim iaculis imperdiet. Quisque feugiat massa nulla, in eleifend neque tincidunt nec. Fusce aliquet nulla non velit gravida, eu dapibus odio convallis. Pellentesque a eros ut erat maximus tempus. Quisque sit amet porta ante, at consequat ligula. In hac habitasse platea dictumst.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;