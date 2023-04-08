import React from 'react';
import { AiFillGithub, AiFillMediumCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:devsolutionsuk@gmail.com'>cetinsdev@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Runs with coffee, driven by puzzles, requires challenge</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/Cetins'>
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href='https://linkedin.com/in/cetins'>
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href='https://medium.com/@cetins'>
            <AiFillMediumCircle size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;