import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import Notifications, {notify} from 'react-notify-toast';
import Users from '../../Assets/Users.json';
import UsersList from '../../Containers/Main/UsersList/UsersList';
import NewUserDialog from './NewUserDialog/NewUserDialog';

const AddButton = styled(Button)`
  && {
    position: fixed;
    bottom: 2em;
    right: 2em;
  }
`;

class Main extends React.Component {
  state = {
    users: Users,
    open: false
  };

  onOpenAddUser = () => {
    this.setState({open: true});
  };

  onCloseAddUser = () => {
    this.setState({open: false});
  };

  onConfirm = newUser => {
    const {users} = this.state;

    users.push(newUser);
    const updatedUsers = users;

    this.setState({
      users: updatedUsers,
      open: false
    });

    notify.show(`${newUser.name} created successfully.`, 'success', 2000);
  };

  onDeleteUser = userGuid => {
    const {users} = this.state;

    const updatedUsers = users.filter(user => user.guid !== userGuid);

    this.setState({
      users: updatedUsers
    });
  };

  render = () => {
    const {users, open} = this.state;

    return (
      <Grid container justify='center'>
        <Notifications options={{top: '60px'}} />
        <UsersList
          data={users}
          onDelete={this.onDeleteUser}
        />
        <AddButton
          variant='fab'
          color='secondary'
          aria-label='Add'
          onClick={this.onOpenAddUser}
        >
          <AddIcon />
        </AddButton>
        <NewUserDialog
          open={open}
          onClose={this.onCloseAddUser}
          onConfirm={this.onConfirm}
        />
      </Grid>
    );
  }
}

export default Main;