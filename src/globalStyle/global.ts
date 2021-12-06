import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";
import theme from "./theme";

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle<{ theme: typeof theme }>`
  
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      &::before,
      &::after {
        box-sizing: inherit;
      }
    }
    ${({ theme }) => css`
      html {
        font-size: 62.5%;
      }
      body {
        font-size: ${theme.font.sizes.medium};
        color: ${theme.colors.lightGray};
        background-color: ${theme.colors.lightBg};
      }
    `}
  `;

export default GlobalStyles;
