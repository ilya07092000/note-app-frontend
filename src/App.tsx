import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import DynamicLoader from './containers/DynamicLoader';
import './assets/styles/main.scss';

export const routes = [
  {
    name: 'home',
    path: '/',
    component: import('./pages/Home/index'),
    isInSidebar: true,
  },
];

const App: FC = () => (
  <Switch>
    {routes.map(({ path, component }) => (
      <Route exact path={path} render={() => <DynamicLoader component={component} />} key={path} />
    ))}
  </Switch>
);

export default App;
