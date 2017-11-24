import React, { Component } from 'react'

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked : false
        }
    }

    // handleCheckBoxChange() {
    //     this.setState(({ isChecked }) => (
    //         {
    //             isChecked: !isChecked,
    //         }
    //     ));
    // }

    render() {
        return (
          <div>
              <label>
                  <input
                      type="checkbox"/>
                      {/*// value={this.props.label}*/}
                      {/*// checked={this.state.isChecked}*/}
                      {/*// onChange={this.handleCheckBoxChange()}/>*/}
              </label>
          </div>
        );
    }
}


export default CheckBox