import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap');

* {
    box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body{
    font-family: 'Mukta', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 1.15em;
}

p, li{
    line-height: 1.6;
    margin: 0;
}

`;

export default GlobalStyles;
