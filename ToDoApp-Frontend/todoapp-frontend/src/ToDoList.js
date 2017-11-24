import React from 'react'
import {Component} from 'react-dom'
import ToDoItem from "./ToDoItem";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ToDoList extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <ToDoItem/>,
                <ToDoItem/>,
                <ToDoItem/>
            </MuiThemeProvider>
        )
    }
}

export default ToDoList;
