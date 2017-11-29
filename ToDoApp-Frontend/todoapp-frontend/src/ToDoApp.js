import React, {Component} from "react";
import "./App.css";
import logo from "./logo.svg";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ToDoList from "./ToDoList";

class ToDoApp extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="container">
                <div className="item">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div>
                    <ToDoList/>
                </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default ToDoApp;
