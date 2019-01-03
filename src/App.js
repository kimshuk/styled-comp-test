import React, { Component } from "react";
import styled, {
  createGlobalStyle,
  css,
  ThemeProvider
} from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  html {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100%;
    background-color: #10ac84;
  }
`;

const Card = styled.div`
  background-color: lightblue;
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
