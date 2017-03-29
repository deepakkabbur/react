import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class AddFrom extends React.Component {
  constructor() {
    super();
    this.state = {
      open:false
    };
  };

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({ open: false });
  };

  handleSubmit() {
    var text = this.refs.todoText.getValue();
    if(text.length > 0) {
      this.props.onAdd(text);
      this.handleClose();
    } else {
      this.refs.todoText.focus();
    }
  }
  render() {
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <RaisedButton
        secondary={true}
        label='Submit'
        primary={true}
        onTouchTap={this.handleSubmit.bind(this)}
      />,
    ];
    return (
      <div>
        <RaisedButton secondary={true} label="Add" onTouchTap={(e) => this.handleOpen(e)} />
        <Dialog
          title="Add Todo Item"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="Description"
            floatingLabelText="What you need to do ?"
            ref='todoText'
          />
        </Dialog>
      </div>
    );
  }
}
