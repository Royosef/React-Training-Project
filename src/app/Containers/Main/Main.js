import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import Users from '../../Assets/Users.json';
import UsersList from './Components/UsersList/UsersList';

const AddButton = styled(Button)`
  && {
    position: fixed;
    bottom: 2em;
    right: 2em;
  }
`;

function Main () {
  return (
    <Grid container justify='center'>
      <UsersList data={Users} />
      <AddButton variant='fab' color='secondary' aria-label='Add'>
        <AddIcon />
      </AddButton>
    </Grid>
  );
}

export default Main;