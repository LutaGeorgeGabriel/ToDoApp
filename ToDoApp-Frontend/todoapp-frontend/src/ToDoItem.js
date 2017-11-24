import React from 'react'
import {Component} from 'react-dom'
import CheckBox from './CheckBox'
import TextField from 'material-ui/TextField';

class ToDoItem extends React.Component {
    render() {
        return (
          <div>
            <CheckBox/>
            <TextField/>
          </div>
        );
    }
}

export default ToDoItem