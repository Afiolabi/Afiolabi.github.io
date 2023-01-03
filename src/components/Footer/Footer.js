import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+2347065963753">+2347065963753</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="afolabiolagunju@gmail.com">
            afolabiolagunju@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Transforming Africa's technology landscape, one line of code at a
            time
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Afiolabi">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/isaacolagunju/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          {/* <SocialIcons href="https://google.com">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
