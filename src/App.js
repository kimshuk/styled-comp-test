import React, { Component } from "react";
import styled from "styled-components";

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

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Button success>Success</Button>
        <Button danger>Danger</Button>
      </Container>
    );
  }
}

export default App;
