/*
 *
 * Title: dashboard right panel
 * Description: dashboard right panel
 * Author: Shah Arafat
 * Date: 25-04-2021
 *
 */
import React from 'react';
import { Switch } from 'react-router';
import { AddNewNote, AllNotes } from '../../pages';
import PrivateRoute from '../../routes/PrivateRoute';

const DashboardRightPanel = () => {
  return (
    <>
      <Switch>
        <PrivateRoute path="/dashboard" exact component={AllNotes} />
        <PrivateRoute path="/dashboard/addNote" component={AddNewNote} />
      </Switch>
    </>
  );
};

export default DashboardRightPanel;
