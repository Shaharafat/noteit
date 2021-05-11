/*
 *
 * Title: Note details
 * Description: Notes details and new note form
 * Author: Shah Arafat
 * Date: 11-05-2021
 *
 */
import React from 'react';
import { Route, Switch } from 'react-router';
import SingleNote from './SingleNote';

const NoteDetails = () => {
  return (
    <div>
      details
      <Switch>
        <Route path="/dashboard/singleNote" component={SingleNote} />
      </Switch>
    </div>
  );
};

export default NoteDetails;
