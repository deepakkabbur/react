import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Form from './AddForm.jsx';

const style = {
  marginRight: 20,
};

export default class AddMenu extends React.Component {
  render() {
    return (
      <FloatingActionButton style={style} secondary={true} onTouchTap={Form.handleOpen}>
        <ContentAdd />
      </FloatingActionButton>
    );
  }
}
