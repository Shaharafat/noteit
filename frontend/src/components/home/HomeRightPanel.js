/*
 *
 * Title: Home page right panel
 * Description: homepage right panel
 * Author: Shah Arafat
 * Date: 21-04-2021
 *
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthSection, ForgotPassword, LoginForm, RegisterForm, ResetPassword } from '../';

const HomeRightPanel = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Switch>
        <Route path="/home" exact component={AuthSection} />
        <Route path="/home/signup" component={RegisterForm} />
        <Route path="/home/login" component={LoginForm} />
        <Route path="/home/forgotpassword" component={ForgotPassword} />
        <Route path="/home/resetpassword/:resetToken" component={ResetPassword} />
      </Switch>
    </div>
  );
};

export default HomeRightPanel;
