import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ClampLines from 'react-clamp-lines';

const AboutClampLinesTypo = styled(ClampLines)`
  && {
    height: 60px;
  }
`;

const SimpleMediaCard = ({name, description}) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography gutterBottom variant='headline' component='h2'>
            {name}
          </Typography>
          <AboutClampLinesTypo lines='4' ellipsis='...' text={description} buttons={false} />
        </CardContent>
        <CardActions>
          <Button size='small' color='primary'>
            {'Read More'}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default SimpleMediaCard;