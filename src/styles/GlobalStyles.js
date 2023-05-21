import { createGlobalStyle } from 'styled-components';
import '@fontsource/kaushan-script';
import '@fontsource/sirin-stencil';

const GlobalStyles = createGlobalStyle`
*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: "Sirin Stencil";
    overflow-x: hidden;
}

/* h1,h2,h3,h4{
    margin: 0;
    padding: 0; 
} */

ul, li{
    list-style: none;
}

a{
    color: inherit;
    text-decoration: none;
}
`;

export default GlobalStyles;
