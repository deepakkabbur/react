import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';
import AddMenu from './AddMenu.jsx';
import Form from './AddForm.jsx';

const title = 'My Todo App'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title={title}
            iconElementRight={<AddMenu />}
          />
        </MuiThemeProvider>,
        <MuiThemeProvider>
          <Form />
        </MuiThemeProvider>

      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
