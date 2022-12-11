import React from 'react';

import { AiFillGithub } from 'react-icons/ai';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TagImage, TitleContent, UtilityList, Img, GitHubLink } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <Hr />
            <TagList>
              { tags.map((tag, i) => (
                <TagImage key={i} src={tag}/>
              )) }
            </TagList>
          </div>
          <UtilityList>
            <GitHubLink href={ visit }><AiFillGithub size="3rem" /></GitHubLink>
            <ExternalLinks href={ source }>Live Preview</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;