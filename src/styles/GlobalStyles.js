import { createGlobalStyle } from "styled-components";
import Francisco from "../assets/fonts/Francisco.woff";
import KNPSKkomi from "../assets/fonts/KNPSKkomi.woff";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Francisco";
        src: local("Francisco"), url(${Francisco}) format('woff'); 
        font-weight: normal;
    }

    @font-face {
        font-family: "KNPSKkomi";
        src: local("KNPSKkomi"), url(${KNPSKkomi}) format('woff'); 
        font-weight: normal;
    }
  body {
    margin: 0;
    background-color: rgb(250, 240, 240);
  }
`;

export default GlobalStyle;
