import React from "react";
import CheckBox from "material-ui/Checkbox";
import TextField from 'material-ui/TextField';

class ToDoItem extends React.Component {
    render() {
        return (
          <div>
             <div className="inline-div">
                 <CheckBox/>
             </div>
              <div className="inline-div">
                  <TextField/>
              </div>
          </div>
        );
    }
}

export default ToDoItem;