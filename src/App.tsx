import React, { FC, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './assets/styles/main.scss';
import Signup from './pages/Signup/index';
import Signin from './pages/SignIn/index';
import withAuth from './common/hoc/withAuth';

const Home = lazy(() => import('./pages/Home/index'));
const Note = lazy(() => import('./pages/Note/index'));

export const routes = [
  {
    name: 'Home',
    path: '/',
    component: withAuth(Home),
    isInSidebar: true,
  },
  {
    name: 'Note',
    path: '/note/:id',
    component: withAuth(Note),
    isInSidebar: false,
  },
  {
    name: 'Signup',
    path: '/signup',
    component: Signup,
    isInSidebar: false,
  },
  {
    name: 'Signin',
    path: '/signin',
    component: Signin,
    isInSidebar: false,
  },
];

const App: FC = () => (
  <Switch>
    <Suspense fallback={<div>Loading...</div>}>
      {routes.map(({ path, component }) => (
        <Route exact path={path} component={component} key={path} />
      ))}
    </Suspense>
  </Switch>
);

export default App;
