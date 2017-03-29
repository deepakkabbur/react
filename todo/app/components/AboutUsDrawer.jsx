import React from 'react';
import Drawer from 'material-ui/Drawer';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

export default class AboutUsDrawer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      handleOnClick: props.handleClick
    }
  }
  handleOnClick(){
    this.setState({open: !this.state.open});
  }
  render() {
    return(
      <div>
        <Drawer open={this.state.open}>
          <h4> Developed By </h4>
          <h2> Deepak Kabbur </h2>
        </Drawer>
      </div>
    )
  }
}
