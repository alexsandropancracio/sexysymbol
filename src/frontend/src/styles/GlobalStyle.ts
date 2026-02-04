import { createGlobalStyle } from "styled-components";

import MoglandeFont from "../assets/fonts/moglandemo.regular.ttf";
import AvelireFont from "../assets/fonts/avelire.otf";



export const GlobalStyle = createGlobalStyle`
  /* ===== MOGLANDE FONT ===== */
  @font-face {
    font-family: "Moglande";
    src: url(${MoglandeFont}) format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  /* ===== AVELIRE FONT ===== */
  @font-face {
    font-family: "Avelire";
    src: url(${AvelireFont}) format("opentype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  /* ===== RESET ===== */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;
