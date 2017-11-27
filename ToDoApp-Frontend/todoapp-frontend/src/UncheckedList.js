import React from "react";
import ToDoItem from "./ToDoItem";
import "./App.css";
import ToDoList from "./ToDoList";


class UncheckedList extends React.Component {
    render() {
        return (
            <ToDoList/>
        )
    }
}

export default UncheckedList;
