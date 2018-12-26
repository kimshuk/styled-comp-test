import React, { Component, Fragment } from "react";
import Button from "./Button";

class App extends Component {
  render() {
    return (
      <Fragment>
        <button className="button--success button">Success</button>
        <button className="button--danger button">Danger</button>
      </Fragment>
    );
  }
}

export default App;
