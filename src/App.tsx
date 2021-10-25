import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard';

import './assets/styles/main.scss';

const App: FC = () => (
  <Switch>
    <Route exact path='/' component={Dashboard}/>
  </Switch>
);

export default App;
