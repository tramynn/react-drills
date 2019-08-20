import React, { Component } from "react";
import Todo from './Todo';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
