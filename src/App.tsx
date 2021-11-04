import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import DynamicLoader from './containers/DynamicLoader';
import './assets/styles/main.scss';

export const routes = [
  {
    name: 'Home',
    path: '/',
    component: import('./pages/Home/index'),
    isInSidebar: true,
  },
  {
    name: 'Note',
    path: '/note/:id',
    component: import('./pages/Note/index'),
    isInSidebar: false,
  },
  {
    name: 'Signup',
    path: '/signup',
    component: import('./pages/Signup/index'),
    isInSidebar: false,
  },
  {
    name: 'Signin',
    path: '/signin',
    component: import('./pages/SignIn/index'),
    isInSidebar: false,
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
