import React from 'react';
import 'react-quill/dist/quill.snow.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Dashboard, Home } from './pages';
import PrivateRoute from './routes/PrivateRoute';
import RedirectRoute from './routes/RedirectRoute';
import { StoreProvider } from './store/Store';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Switch>
          <RedirectRoute exact path="/">
            <Redirect to="/home" />
          </RedirectRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
