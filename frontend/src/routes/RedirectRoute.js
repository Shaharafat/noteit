/*
 *
 * Title: authenticated route
 * Description: User will redirect to dashboard instead of login page if logged in
 * Author: Shah Arafat
 * Date: 21-04-2021
 *
 */
import React from 'react';
import { Redirect, Route } from 'react-router';
import { useStore } from '../store/Store';

const RedirectRoute = ({ children, ...rest }) => {
  const { state } = useStore();

  return <Route {...rest} render={() => (state.user ? <Redirect to="/dashboard" /> : children)} />;
};

export default RedirectRoute;
