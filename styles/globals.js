import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    background: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.75;
    color: #000000;
    margin: 0;
  }

  p {
    font-size: 1.6rem;
    margin: 0 0 1rem 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 3rem 0 1.38rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 7.594rem;
  }

  h2 {
    margin-top: 0;
    font-size: 5.063rem;
    font-weight: 700;
  }

  h3 {
    font-size: 3.375rem;
  }

  h4 {
    font-size: 2.25rem;
  }

  h5 {
    font-size: 1.5rem;
  }

  small,
  .text_small {
    font-size: 0.667rem;
  }

  button,
  input {
    font-size: 1.6rem;
  }

  input {
    background-color: #eeeeee;
    border: none;
    display: block;
    height: 30px;
    margin: 0 0 12px 0;
    width: 100%;
  }

  label {
    font-size: 1.6rem;
  }

  textarea {
    background-color: #eeeeee;
    border: none;
    font-family: 'Roboto', sans-serif;
    height: 30vh;
    padding: 10px;
    resize: none;
    width: calc(100% - 20px);
  }

  a {
    text-decoration: none;
    color: black;
  }
`
