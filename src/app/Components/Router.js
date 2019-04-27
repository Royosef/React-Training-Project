import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserInfo from '../Containers/UserInfo/UserInfo';
import Main from './Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/users/:guid' component={UserInfo} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;