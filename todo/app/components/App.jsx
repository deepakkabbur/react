import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';
import Menu from './Menu.jsx';
import TodoList from './TodoList.jsx'
import Form from './AddForm.jsx';

const title = 'My Todo App'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  handleAdd(text) {
    var length = this.state.todos.length
    this.state.todos.push({ id: length + 1, text: text});
    this.setState({todos: this.state.todos});
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title={title}
            iconElementRight={<Menu /> }
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <TodoList todos= {this.state.todos}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Form onAdd={this.handleAdd.bind(this)}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
