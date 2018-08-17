import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import UserPreview from './UserPreview';

const AddButton = styled(Button)`
  && {
    position: absolute;
    bottom: 2em;
    right: 2em;
  }
`;

const UserPreviewsGrid = styled(Grid)`
  && {
    padding-top: 80px;
  }
`;

function Main () {
  return (
    <div>
      <UserPreviewsGrid xs={4}>
        <UserPreview name='GG' description='sdgvsrsgv' />
      </UserPreviewsGrid>
      <AddButton variant='fab' color='secondary' aria-label='Add'>
        <AddIcon />
      </AddButton>
    </div>
  );
}

export default Main;