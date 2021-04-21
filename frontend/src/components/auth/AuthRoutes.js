/*
 *
 * Title: Auth routes
 * Description: auth routes like login, signup, forget password, reset password
 * Author: Shah Arafat
 * Date: 21-04-2021
 *
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const AuthRoutes = () => {
  return (
    <Switch>
      <Route path="/login" />
      <Route path="/signup" />
      <Route path="/forgotpassword" />
    </Switch>
  );
};

export default AuthRoutes;
