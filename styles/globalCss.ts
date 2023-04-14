import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Inter;
  }

  body {
    background: #fff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
  }

  * {
    box-sizing: border-box;
    font-family: Inter;
  }

  /* Change the white to any color */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active
  {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`

export default GlobalStyle
