import React from 'react';
import styled from 'styled-components';
import Avatar from './../assets/avatar.jpeg';
import { Link } from '../styled-components/common';

const HeaderContainer = styled.header`
  color: ${(p) => p.theme.colors.text};
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderToogle = styled.div`
  display: inline-flex;
  align-items: center;
`;

const ToogleButton = styled.button`
  cursor: pointer;
  background-color: ${(p) => p.theme.colors.link.text};
  border: none;
  color: ${(p) => p.theme.colors.text};
  padding: 5px;
  border-radius: 10px;
`;

const HeaderAuthor = styled.div`
  display: flex;
  justify-content: start;
`;

const HeaderAuthorAvater = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
`;

const HeaderAuthorTitle = styled.h4`
  margin: 5px 0;
`;

export const Header = ({ onToggleChanged }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <h1>Overreacted</h1>
        <HeaderToogle onClick={onToggleChanged}>
          <ToogleButton>Switch Theme</ToogleButton>
        </HeaderToogle>
      </HeaderTitle>
      <HeaderAuthor>
        <HeaderAuthorAvater src={Avatar} />
        <div>
          <HeaderAuthorTitle>
            Personal blog by{' '}
            <Link href='https://mobile.twitter.com/dan_abramov' target='blank'>
              Dan Abramov
            </Link>
            .
          </HeaderAuthorTitle>
          <span>I explain with words and code.</span>
        </div>
      </HeaderAuthor>
    </HeaderContainer>
  );
};
