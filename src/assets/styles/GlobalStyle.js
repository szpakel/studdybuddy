import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: "Montserrat", serif;
  }

  a, button {
    font-family: "Montserrat", serif;
  }
`;

export default GlobalStyle;
