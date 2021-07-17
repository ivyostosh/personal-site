import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  header {
    background: ${({ theme }) => theme.body};
    transition: all 0.50s linear;
  }
  // skill-button-container {
  //   color: ${({ theme }) => theme.text};
  // }
  // skills {
  //   color: ${({ theme }) => theme.text};
  // }
  // link-to {
  //   color: ${({ theme }) => theme.text};
  // }
  // title {
  //   color: ${({ theme }) => theme.text};
  // }
  button {
    color: ${({ theme }) => theme.text};
  }
  .skillbar {
    background:#eee;
  }
  .skillbar-title {
     background:#eee;
  }
`;

export default GlobalStyle;
