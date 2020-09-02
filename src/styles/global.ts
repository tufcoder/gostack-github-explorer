import { createGlobalStyle } from 'styled-components';

import gitHubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background) url(${gitHubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    margin: 0 auto;
    padding: 40px 20px;
    max-width: 960px;
  }

  :root {
    --background: #f0f0f5;
    --title: #3a3a3a;
    --white: #FFF;
    --black: #000;
    --button-primary: #04d361;
    --button-secondary: #04A361;
    --placeholder: #a8a8b3;
    --strong: #3d3d4d;
    --arrow-right: #cbcbd6;
    --error: #c53030;
    --text: #737380;
  }
`;
