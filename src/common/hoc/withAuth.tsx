import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MainContext } from '../context/main';

const withAuth = (WrappedComponent: any) =>
  class extends Component<{}, { token: string }> {
    static contextType = MainContext;

    // eslint-disable-next-line class-methods-use-this
    render() {
      if (!localStorage.getItem('token')) {
        return <Redirect to='/signup' />;
      }

      return <WrappedComponent />;
    }
  };

export default withAuth;
