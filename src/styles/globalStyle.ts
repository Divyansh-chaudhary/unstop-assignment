import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  .section-heading {
    color: ${(p) => p.theme.color.primary};
    font-family: ${(p) => p.theme.font.inter};
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
  }

  p.sub-heading {
    color: ${(p) => p.theme.color.primary};
    font-family: ${(p) => p.theme.font.inter};
    font-weight: 600;
    font-size: 14px;
    line-height: 19.6px;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;
