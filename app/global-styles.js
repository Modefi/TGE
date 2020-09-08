import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap');

  @font-face {
    font-family: 'Gotham Condensed';
    src: url('./public/fonts/GothamCondensed-Light.woff2') format('woff2'),
      url('./public/fonts/GothamCondensed-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham Extra';
    src: url('./public/fonts/Gotham-ExtraLight.woff2') format('woff2'),
      url('./public/fonts/Gotham-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('./public/fonts/Gotham-BlackItalic.woff2') format('woff2'),
      url('./public/fonts/Gotham-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('./public/fonts/Gotham-Bold.woff2') format('woff2'),
      url('./public/fonts/Gotham-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham Book';
    src: url('./public/fonts/Gotham-BookItalic.woff2') format('woff2'),
      url('./public/fonts/Gotham-BookItalic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('./public/fonts/Gotham-LightItalic.woff2') format('woff2'),
      url('./public/fonts/Gotham-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham Ultra';
    src: url('./public/fonts/Gotham-UltraItalic.woff2') format('woff2'),
      url('./public/fonts/Gotham-UltraItalic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('./public/fonts/Gotham-Light.woff2') format('woff2'),
      url('./public/fonts/Gotham-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham Condensed';
    src: url('./public/fonts/GothamCondensed-Medium.woff2') format('woff2'),
      url('./public/fonts/GothamCondensed-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('./public/fonts/Gotham-Medium.woff2') format('woff2'),
      url('./public/fonts/Gotham-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham Ultra';
    src: url('./public/fonts/Gotham-Ultra.woff2') format('woff2'),
      url('./public/fonts/Gotham-Ultra.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('./public/fonts/Gotham-BoldItalic.woff2') format('woff2'),
      url('./public/fonts/Gotham-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham Extra';
    src: url('./public/fonts/Gotham-ExtraLightItalic.woff2') format('woff2'),
      url('./public/fonts/Gotham-ExtraLightItalic.woff') format('woff');
    font-weight: 200;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham Book';
    src: url('./public/fonts/Gotham-Book.woff2') format('woff2'),
      url('./public/fonts/Gotham-Book.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('./public/fonts/Gotham-MediumItalic.woff2') format('woff2'),
      url('./public/fonts/Gotham-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham Condensed Book';
    src: url('./public/fonts/GothamCondensed-Book.woff2') format('woff2'),
      url('./public/fonts/GothamCondensed-Book.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham Condensed';
    src: url('./public/fonts/GothamCondensed-Bold.woff2') format('woff2'),
      url('./public/fonts/GothamCondensed-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('./public/fonts/Gotham-Black.woff2') format('woff2'),
      url('./public/fonts/Gotham-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'NexaBold';
      src:  url('./public/fonts/NexaBold.ttf.woff?1.1') format('woff'),
      url('./public/fonts/NexaBold.ttf.svg#NexaBold?1.1') format('svg'),
      url('./public/fonts/NexaBold.ttf.eot?1.1'),
      url('./public/fonts/NexaBold.eot?#iefix?1.1') format('embedded-opentype');
      font-weight: normal;
      font-style: normal;
    }

  html,
  body {
    height: 100%;
    width: 100%;
    font-family: Gotham, sans-serif;
    font-weight: '500';
    font-size: '18px';
    max-width: 100vw;
    overflow-x: hidden;
    background-color: white;
    color: #040404;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #808080;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
