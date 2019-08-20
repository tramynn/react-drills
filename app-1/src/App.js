import React, { Component } from "react";
import InputField from './components/InputField';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({userInput: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <InputField />
        <Header />
      </div>
    );
  }
}

export default App;
