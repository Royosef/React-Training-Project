import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import UserPreview from './Components/UserPreview/UserPreview';

const UserPreviewsGrid = styled(Grid)`
  && {
    padding-top: 80px;
  }
`;

function UsersList ({data}) {
  return (
    <UserPreviewsGrid item container justify='center' md={10} spacing={16}>
      {
        data.map(x => (
          <Grid key={x.guid} item xs={12} md={4} xl={3}>
            <UserPreview style={{width: '80px'}} name={x.name} description={x.about} />
          </Grid>
        ))
      }
    </UserPreviewsGrid>
  );
}

export default UsersList;