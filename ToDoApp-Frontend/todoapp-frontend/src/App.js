import React, {Component} from "react";
import "./App.css";
import CheckedList from "./CheckedList.js"
import UncheckedList from "./UncheckedList.js"
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
        <div align="center">
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div>
                <div className="inline-div">
                    <CheckedList/>
                </div>
                <div className="inline-div">
                    <UncheckedList/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
