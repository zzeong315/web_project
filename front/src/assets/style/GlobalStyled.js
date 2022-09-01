import { createGlobalStyle } from "styled-components";
import TextStyle from "./fonts/AppleSDGothicNeoSB.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: AppleSDGothicNeoSB;
    src: local("AppleSDGothicNeoSB"),
    url(${TextStyle});
    font-weight: 50;
    font-style: normal;
}

  * {
    font-family: "AppleSDGothicNeoSB", "Arial", sans-serif;
  }
`;

export default GlobalStyle;
