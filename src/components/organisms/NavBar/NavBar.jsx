import React from 'react';
import { Wrapper, Logo, StyledLink } from './NavBar.styles';

const NavBar = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to="/">
        Dashboard
      </StyledLink>
      <StyledLink to="/add-user">
        Add user
      </StyledLink>
      {/* <StyledLink activeClassName="active-link" to="/">
        Settings
      </StyledLink>
      <StyledLink activeClassName="active-link" to="/">
        Logout
      </StyledLink> */}
    </Wrapper>
  );
};

export default NavBar;
