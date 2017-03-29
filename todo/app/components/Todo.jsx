import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
export default class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todo: props,
      done: false
    }
  }
  handleCheckbox(event, done) {
    this.setState({done: done})
  }
  render() {
    return (
      <ListItem
        primaryText={this.state.todo.text}
        leftCheckbox={<Checkbox  onCheck={this.handleCheckbox.bind(this)}/>}
        disabled={this.state.done}
        checked={this.state.done}
      />
    );
  }
}
