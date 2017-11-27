import React from 'react'
import {Component} from 'react-dom'
import ToDoItem from "./ToDoItem";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class ToDoList extends React.Component {

    createToDo() {
        return (
            <ToDoItem/>
        );
    }

    render() {
        return (
            <MuiThemeProvider>
                <ToDoItem/>
                <ToDoItem/>
                <ToDoItem/>
            </MuiThemeProvider>
        )
    }
}

export default ToDoList;
