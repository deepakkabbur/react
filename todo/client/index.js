import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App.jsx';
import AddMenu from './components/AddMenu.jsx';
import Form from './components/AddForm.jsx';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('app'))
