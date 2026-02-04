import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      primary: string;
      text: string;
      muted: string;
    };
    fonts: {
      primary: string;
      heading: string;
    };
  }
}
