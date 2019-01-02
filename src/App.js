import React, { Component } from "react";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100%;
    background-color: #10ac84;
  }
`;

// const Button = styled.button`
//   border-radius: 50px;
//   padding: 5px;
//   min-width: 120px;
//   color: white;
//   font-size: 20px;
//   font-weight: 600;
//   -webkit-appearance: none;
//   cursor: pointer;
//   &:active,
//   &:focus {
//     outline: none;
//   }
//   background-color: ${props => (props.danger ? "#c0392b" : "#27ae60")};
//   ${props => {
//     if (props.danger) {
//       return css`
//         animation: ${rotation} ${props.rotationTime}s linear infinite;
//       `;
//     }
//   }}
// `;

// const Anchor = styled(Button)`
//   text-decoration: none;
// `;

// const rotation = keyframes`
//   from {
//     tranform: rotate(0deg)
//   }
//   to {
//     transform: rotate(360deg)
//   }
// `;

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled.input.attrs({
  required: true
})`
  border: none;
  ${awesomeCard};
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Input placeholder="hello" />
      </>
    );
  }
}

export default App;
