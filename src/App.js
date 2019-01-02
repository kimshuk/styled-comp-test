import React, { Component } from "react";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

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
  ${props => {
    if (props.danger) {
      return css`
        animation: ${rotation} ${props.rotationTime}s linear infinite;
      `;
    }
  }}
`;

const Anchor = styled(Button)`
  text-decoration: none;
`;

const rotation = keyframes`
  from {
    tranform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Button success>Success</Button>
        <Button danger rotationTime={5}>
          Danger
        </Button>
        <Anchor as="a" href="https://google.com">
          Go to gooogle
        </Anchor>
      </>
    );
  }
}

export default App;
