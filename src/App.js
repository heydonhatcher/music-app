import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppBar, Toolbar } from "@material-ui/core";
import Login from "./components/Login";
import "typeface-roboto";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>My Music App</Toolbar>
        </AppBar>
        <Login />
      </div>
    );
  }
}

export default App;
