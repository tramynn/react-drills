import React, { Component } from "react";
import Image from "./Image";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Image className="App-Image" myImage={"https://images.unsplash.com/photo-1527833750198-386582952cf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} />
        </div>
      </div>
    );
  }
}

export default App;
