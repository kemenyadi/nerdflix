import React from "react";
import "./App.css";
import { logo } from "./constants";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">{logo}</header>
      </div>
    );
  }
}

export default App;
