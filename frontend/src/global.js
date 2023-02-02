import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #181D31;
    --secondary-color: #ff8b2b;
    --cta-color: #FF6500;
    --white: #fff;
    --white-100: #FAFAFB;
    --gray-100: #eee;
    --gray-soft: #C4C4C4;
    --dark-gray: #565C69;
    --font-color: #454545;
    --font-bold: #2b2b2b;
    --red: #E72626;
    --banner: ${({ backgroundColor }) => backgroundColor};
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
    @media(max-width: 720px) {
        font-size: 87,5%;
    }
  }

  * html ul li { float: left; }
  * html ul li a { height: 1%; }

  label.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow:hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
  }

  body {
    transition: background .2s;
    background: var(--banner);
 
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }


  span {
      font-weight: 700;
      font-weight: 700;
      color: var(--secondary-color);
      span.logo {
        background: #C02425;
        background: -webkit-linear-gradient(to right, #F0CB35, #C02425);
        background: linear-gradient(to right, #F0CB35, #C02425);

        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        color: var(--secondary-color);

      }
  }
 
`