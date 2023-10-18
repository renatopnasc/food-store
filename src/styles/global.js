import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-size: 62.5%;
  }

  body, input, button, textarea {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.COLORS.DARK_400};
  }

  a {
    text-decoration: none;
  }
  
  a, button {
    cursor: pointer;
  }

`;
