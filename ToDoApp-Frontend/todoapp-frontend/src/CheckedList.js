import React from "react";
import "./App.css";


class CheckedList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.todos}
            </div>
        )
    }
}

export default CheckedList;
