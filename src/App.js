import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = { apiResponse: "" };

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return <p className="App-intro">;{this.state.apiResponse}</p>;
  }
}

export default App;
