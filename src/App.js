import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100%;
    background-color: #bdc3c7;
  }
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#c0392b" : "#27ae60")};
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Button success>Success</Button>
        <Button danger>Danger</Button>
      </>
    );
  }
}

export default App;
