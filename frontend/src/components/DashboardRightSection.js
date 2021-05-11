/*
 *
 * Title: Dashboard right panel
 * Description: Panel contains add note and note details route
 * Author: Shah Arafat
 * Date: 11-05-2021
 *
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AddNoteForm } from '.';
import NoteDetails from './NoteDetails';

const DashboardRightSection = () => {
  return (
    <div className="px-3">
      <Switch>
        <Route path="/dashboard/newNote" component={AddNoteForm} />
        <Route path={`/dashboard/note/:noteId`} component={NoteDetails} />
      </Switch>
    </div>
  );
};

export default DashboardRightSection;
