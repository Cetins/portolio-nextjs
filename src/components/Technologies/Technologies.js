import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListItem } from './TechnologiesStyles';

import { DiPython, DiJavascript1, DiJava, DiReact } from 'react-icons/di';
import { SiFlask, SiDjango, SiSpring, SiPostgresql, SiMongodb, SiHtml5, SiCss3 } from 'react-icons/si';
import { FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { AiOutlineConsoleSql } from 'react-icons/ai';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      With a strong dedication to computer programming and a passion for coding, I have developed high skill levels in <strong><em>Python</em></strong> and <strong><em>Javascript</em></strong>. Have a proven track record of quickly mastering new technologies and techniques.
    </SectionText>

    <List>
      <ListItem><h3>C</h3></ListItem>
      <ListItem><DiPython /></ListItem>
      <ListItem><SiFlask /></ListItem>
      <ListItem><SiDjango /></ListItem>
      <ListItem><DiJavascript1 /></ListItem>
      <ListItem><DiReact /></ListItem>
      <ListItem><FaNodeJs /></ListItem>
      <ListItem><DiJava /></ListItem>
      <ListItem><SiSpring /></ListItem>
      <ListItem><AiOutlineConsoleSql /></ListItem>
      <ListItem><SiPostgresql /></ListItem>
      <ListItem><SiMongodb /></ListItem>
      <ListItem><SiHtml5 /></ListItem> 
      <ListItem><SiCss3 /></ListItem> 
      <ListItem><FaGitAlt /></ListItem>  
    </List>

    {/* <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size='3rem'/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List> */}

  </Section>
);

export default Technologies;