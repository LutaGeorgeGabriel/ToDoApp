import React from "react";
import CheckBox from "material-ui/Checkbox";
import TextField from 'material-ui/TextField';

// class ToDoItem extends React.Component {
//     render() {
//         return (
//           <div className="todo_container">
//              <div className="todo_item">
//                  <CheckBox/>
//              </div>
//               <div className="todo_item">
//                   <TextField/>
//               </div>
//           </div>
//         );
//     }
// }

export const ToDoItem = () => {
    return (
          <div className="todo_container">
             <div className="todo_item">
                 <CheckBox/>
             </div>
              <div className="todo_item">
                  <TextField/>
              </div>
          </div>
        );
}


export default ToDoItem;