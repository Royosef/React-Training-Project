import React from 'react';
import {render} from 'react-dom';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Router from './Components/Router';

const AppContainer = styled('div')`
  && {
    margin-top: 80px;
    display: flex;
    justify-content: center;
  }
`;

const App = () => {
  return (
    <Grid>
      <AppBar>
        <Toolbar>
          <Typography color='inherit'>{'React Training Project'}</Typography>
        </Toolbar>
      </AppBar>
      <AppContainer>
        <Router />
      </AppContainer>
    </Grid>
  );
}

render(<App />, window.document.getElementById('app'));