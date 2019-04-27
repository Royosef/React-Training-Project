import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ClampLines from 'react-clamp-lines';
import {Link} from 'react-router-dom';
import UserPreviewMenuButton from '../../../Components/Main/UsersList/UserPreviewMenuButton';

const AboutClampLinesTypo = styled(ClampLines)`
  && {
    height: 60px;
  }
`;

const CardActionsContainer = styled(CardActions)`
  && {
    display: flex;
    justify-content: space-between;
  }
`;

const SimpleMediaCard = ({guid, name, description, onDelete}) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography gutterBottom variant='headline' component='h2'>
            {name}
          </Typography>
          <AboutClampLinesTypo lines='4' ellipsis='...' text={description} buttons={false} />
        </CardContent>
        <CardActionsContainer>
          <Button
            size='small'
            color='primary'
            variant='outlined'
            to={`/users/${guid}`}
            component={Link}
          >
            {'Read More'}
          </Button>
          <UserPreviewMenuButton
            guid={guid}
            onDelete={onDelete}
          />
        </CardActionsContainer>
      </Card>
    </div>
  );
};

export default SimpleMediaCard;