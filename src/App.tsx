import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard';

import './assets/main.scss';

const App: FC = () => (
  <Switch>
    <Route exact path='/' component={Dashboard}/>
  </Switch>
);

export default App;
