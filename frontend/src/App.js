import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { Dashboard, Home } from './pages';
import HomeRoute from './routes/HomeRoute';
import PrivateRoute from './routes/PrivateRoute';
import { StoreProvider } from './store/Store';

function App() {
  return (
    <Router>
      <StoreProvider>
        <Switch>
          <HomeRoute exact path="/" component={Home} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </StoreProvider>
    </Router>
  );
}

export default App;
