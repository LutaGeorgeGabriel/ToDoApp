import React from "react";
import ToDoItem from "./ToDoItem";
import "./App.css";
import ToDoList from "./ToDoList";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    marginRight: 20,
};

class UncheckedList extends React.Component {
    render() {
        return (
            <FloatingActionButton mini={true} style={style}>
                <ContentAdd />
            </FloatingActionButton>,
            <ToDoList/>
        )
    }
}

export default UncheckedList;
