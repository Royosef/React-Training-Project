import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  }
};

function SimpleMediaCard ({name, description}) {
  return (
    <div>
      <Card className={'card'}>
        <CardContent>
          <Typography gutterBottom variant='headline' component='h2'>
            {name}
          </Typography>
          <Typography component='p'>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary'>
            {'Read More'}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(SimpleMediaCard);