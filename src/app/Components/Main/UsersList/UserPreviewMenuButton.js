import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVert from '@material-ui/icons/MoreVert';
import Delete from '@material-ui/icons/Delete';

class UserPreviewMenuButton extends React.Component {
  constructor (props) {
    super(props);

    const {onDelete, guid} = props;

    this.state = {
      guid,
      onDelete,
      anchorEl: null
    };
  }

  onMenuButtonClick = event => {
    this.setState({anchorEl: event.currentTarget});
  }

  onClose = () => {
    this.setState({anchorEl: null});
  }

  onDeleteButtonClick = () => {
    const {onDelete, guid} = this.state;

    onDelete(guid);

    this.onClose();
  }

  render = () => {
    const {anchorEl} = this.state;

    return (
      <IconButton>
        <MoreVert
          onClick={this.onMenuButtonClick}
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.onClose}
        >
          <MenuItem
            onClick={this.onDeleteButtonClick}
          >
            <Delete />
            {'Delete'}
          </MenuItem>
        </Menu>
      </IconButton>
    );
  };
}

export default UserPreviewMenuButton;