import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: 'Roboto', sans-serif;
    color: #ebebeb;
    background: #201e1e;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    --color-background: #201e1e;
    --color-surface: #27282b;
    --color-accent: #00ff29;
    --color-text: #ebebeb;
    --color-muted: #a0a0a0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
  }

  button,
  input,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  #root {
    min-height: 100vh;
  }
`;

export default GlobalStyles;