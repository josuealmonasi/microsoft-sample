import { createGlobalStyle } from 'styled-components';
export const themes = {
  light: {
    name: 'light',
    colors: {
      nodeBorder: '#ffbbff',
      deepestNode: '#01c57c',
      nodeBgColor: '#fff6c7',
      infoText: '#bebebe',
      infoBorder: '#0fb9ed',
      infoBgColor: '#d2f0f9',
      overlayBgColor: '#00000066',
      overlayContentBgColor: '#FFFFFF',
      bgColor: '#FFFFFF',
      textColor: '#000000',
      codeText: '#f5f5f5'
    },
    responsive: {
      mobile: '768px'
    }
  },
  dark: {
    name: 'dark',
    colors: {
      nodeBorder: '#004400',
      deepestNode: '#fe3a83',
      nodeBgColor: '#000938',
      infoText: '#9377c7',
      infoBorder: '#f04612',
      infoBgColor: '#2d0f06',
      overlayBgColor: '#99c1ff4f',
      overlayContentBgColor: '#000000',
      bgColor: '#000000',
      textColor: '#ffffff',
      codeText: '#343030'
    },
    responsive: {
      mobile: '768px'
    }
  }
};

export const GlobalStyle = createGlobalStyle`
  #root {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 100vh;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: ${({ theme }) => theme.colors.textColor};
    background-color: ${({ theme }) => theme.colors.bgColor};
    transition: all 300ms ease-in-out;
  }

  input {
    max-width: 160px;
  }

  a {
    color: ${({ theme }) => theme.colors.textColor};
    text-decoration: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;
