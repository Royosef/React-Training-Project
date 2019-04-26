import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import UserPreview from './UserPreview';

const UserPreviewsGrid = styled(Grid)`
  && {
    padding-top: 80px;
  }
`;

const UsersList = ({data, onDelete}) => {
  return (
    <UserPreviewsGrid item container justify='center' md={10} spacing={16}>
      {
        data.map(x => (
          <Grid key={x.guid} item xs={6} md={4} xl={2}>
            <UserPreview
              style={{width: '80px'}}
              guid={x.guid}
              name={x.name}
              description={x.about}
              onDelete={onDelete}
            />
          </Grid>
        ))
      }
    </UserPreviewsGrid>
  );
};

export default UsersList;