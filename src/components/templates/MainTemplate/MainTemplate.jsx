import React from 'react';
import NavBar from 'components/organisms/NavBar/NavBar';
import { Wrapper } from './MainTemplate.styles';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <SearchBar />
      <NavBar />
      {children}
      <NewsSection>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </NewsSection>
    </Wrapper>
  );
};

export default MainTemplate;
