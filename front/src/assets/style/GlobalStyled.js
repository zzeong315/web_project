import { createGlobalStyle } from "styled-components";
import TextStyle from "./fonts/DoHyeon-Regular.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: DoHyen-Regular;
    src: local("DoHyen-Regular"),
    url(${TextStyle});
    font-weight: 50;
    font-style: normal;
}

  * {
    font-family: "DoHyen-Regular", "Arial", sans-serif;
  }
`;

export default GlobalStyle;
