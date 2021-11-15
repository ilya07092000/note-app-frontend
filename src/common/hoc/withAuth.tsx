import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MainContext } from '../context/main';

const withAuth = (WrappedComponent: any) =>
  class extends Component {
    static contextType = MainContext;

    render() {
      if (!this.context.state.isAuth) {
        return <Redirect to='/signup' />;
      }

      return <WrappedComponent />;
    }
  };

export default withAuth;
