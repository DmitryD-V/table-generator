import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 12px;
    color: #000000;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    background-color: #E5E8ED;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  padding: 48px;


  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`;
