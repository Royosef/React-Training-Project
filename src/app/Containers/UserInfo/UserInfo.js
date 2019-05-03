import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Users from '../../Assets/Users.json';

const PPaper = styled(Paper)`
  && {
    width: 60vw;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 20px;
  }
`;

const UserInfo = ({match: {params}}) => {
  const {guid} = params;
  const {name, about, age, favoriteFruit} = Users.find(u => u.guid === guid);

  return (
    <div>
      <Button
        size='small'
        color='primary'
        variant='outlined'
        to={'/'}
        component={Link}
      >
        {'Back'}
      </Button>
      <PPaper>
        <Typography gutterBottom variant='headline' component='span'>{name}<span style={{fontSize: '17px'}}>{`, ${age}`}</span></Typography>
        <Typography variant='subheading'>{'About'}</Typography>
        <Typography gutterBottom variant='body2'>{about}</Typography>
        <Typography variant='subheading'>{'Favorite Fruits'}</Typography>

        <div>
          {
            favoriteFruit.map(f => (
              <li key={f}>{f}</li>
            ))
          }
        </div>
      </PPaper>
    </div>
  );
};

export default UserInfo;