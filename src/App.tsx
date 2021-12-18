import React, { FC, lazy, Suspense, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { Route, Switch } from 'react-router-dom';
import './assets/styles/main.scss';
import Signup from './pages/Signup/index';
import Signin from './pages/SignIn/index';
import withAuth from './common/hoc/withAuth';
import { VERIFY_TOKEN } from './common/graphql/user/verifyToken';
import { MainContext } from './common/context/main';
import { ACTION_TYPES as TYPES } from './interfaces/MainContext/IActionTypes';

const Home = lazy(() => import('./pages/Home/index'));
const Note = lazy(() => import('./pages/Note/index'));
const CreateNote = lazy(() => import('./pages/CreateNote/index'));

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
    name: 'create-note',
    path: '/create-note',
    component: withAuth(CreateNote),
    isInSidebar: true,
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

const App: FC = () => {
  const { dispatch } = useContext(MainContext);

  useQuery(VERIFY_TOKEN, {
    onCompleted: ({ me }) => {
      dispatch({
        type: TYPES.LOGIN,
        payload: { user: { username: me.username, email: me.email, avatar: me.avatar } },
      });
    },
    onError: () => {
      if (localStorage.getItem('token')) localStorage.removeItem('token');
    },
  });

  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        {routes.map(({ path, component }) => (
          <Route exact path={path} component={component} key={path} />
        ))}
      </Suspense>
    </Switch>
  );
};

export default App;
