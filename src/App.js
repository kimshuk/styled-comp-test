import React, { Component, Fragment } from "react";
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

class App extends Component {
  render() {
    return (
      <Fragment>
        <Button success>Success</Button>
        <Button danger>Danger</Button>
      </Fragment>
    );
  }
}

export default App;
