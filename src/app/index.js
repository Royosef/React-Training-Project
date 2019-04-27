import React from 'react';
import {render} from 'react-dom';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Router from './Components/Router';

function App () {
  return (
    <Grid>
      <AppBar>
        <Toolbar>
          <Typography color='inherit'>{'React Training Project'}</Typography>
        </Toolbar>
      </AppBar>
      <div style={{marginTop: '80px'}} >
        <Router />
      </div>
    </Grid>
  );
}

render(<App />, window.document.getElementById('app'));