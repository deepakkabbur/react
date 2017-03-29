import React from 'react';
import Todo from './Todo.jsx'
import Subheader from 'material-ui/Subheader';
import List from 'material-ui/List';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos
    }
  }
  renderTodos() {
    var list = this.state.todos.map((todo) => {
      return (
        <Todo key={todo.id} {...todo} />
      );
    });
    return list;
  }

  render() {
    return (
      <div>
        <List>
          {this.renderTodos()}
        </List>
      </div>
    );
  }
}
