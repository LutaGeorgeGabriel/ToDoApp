import React from "react";
import CheckedList from './CheckedList.js'
import ToDoItem from "./ToDoItem";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import "./App.css";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inProgressToDos: [{ToDoItem}],
            doneToDOs: [{ToDoItem}]
        }
    }

    handleCreateToDo() {
        this.setState({
            inProgressToDos: this.state.inProgressToDos.push(<ToDoItem/>),
            doneToDOs: [... this.state.doneToDOs]
        })
    }

    componentDidMount() {
        this.state.inProgressToDos.push(<ToDoItem/>)
    }

    render() {
        return (
            <div className="item">
                <div>
                    <div>
                        <FloatingActionButton mini={true} onClick={this.handleCreateToDo}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </div>
                </div>
                <div className="inline-div">
                    <CheckedList toDos={this.state.doneToDOs}/>
                </div>
            </div>
        )
    }
}

export default ToDoList;
