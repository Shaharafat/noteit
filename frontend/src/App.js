import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Dashboard, Home } from './pages';
import HomeRoute from './routes/HomeRoute';
import PrivateRoute from './routes/PrivateRoute';
import { StoreProvider } from './store/Store';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Switch>
          <HomeRoute exact path="/">
            <Redirect to="/home" />
          </HomeRoute>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
