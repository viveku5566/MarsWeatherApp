import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      warning: string;
      text: string;
      danger: string;
    };
  }
}
