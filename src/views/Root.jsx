import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { Wrapper } from './Root.styles';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import UsersProvider from 'Providers/UsersProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UsersProvider>
          <MainTemplate>
            <Wrapper>
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/add-user" element={<AddUser />}></Route>
              </Routes>
            </Wrapper>
          </MainTemplate>
        </UsersProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
