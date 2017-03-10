import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddFrom extends React.Component {
  constructor() {
    super();
    this.state = { open:false };
  };

  handleOpen() {
    this.setState({open: true});
  };

  handleClose()  {
    this.setState({ open: false });
  };
  render() {
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onTouchTap={ (e) => this.handleClose}
      />,
      <FlatButton
        label='Submit'
        primary={true}
        onTouchTap={ (e) => this.handleClose}
      />
    ]
    return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={(e) => this.handleOpen(e)} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Add Task form will come here.
        </Dialog>
      </div>
    );
  }
}
