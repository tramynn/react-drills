import React, { Component } from "react";
//components
import Login from './components/Login';
//css
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Login">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
