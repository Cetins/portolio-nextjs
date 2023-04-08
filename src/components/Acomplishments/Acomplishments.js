import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 39, text: 'Total Stars Earned'},
  { number: 897, text: 'Total Commits (2023)', },
  { number: 101, text: 'Total PRs', },
  { number: 3, text: 'Projects Contributed', }
];

// use this section for github stats !!!
const Acomplishments = () => (
  <Section>
    <SectionTitle>GitHub Stats</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
