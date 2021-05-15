/*
 *
 * Title: private route
 * Description: private router
 * Author: Shah Arafat
 * Date: 21-04-2021
 *
 */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useStore } from '../store/Store';

const PrivateRoute = ({ children, ...rest }) => {
  const { state } = useStore();
  return <Route {...rest} render={() => (state.user ? children : <Redirect to="/" />)} />;
};

export default PrivateRoute;
