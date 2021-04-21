import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { RegisterLoginForm } from './components';
import { Dashboard, Home } from './pages';
import HomeRoute from './routes/HomeRoute';
import PrivateRoute from './routes/PrivateRoute';
import { StoreProvider } from './store/Store';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Redirect to="/home" />
        <Switch>
          <HomeRoute exact path="/home" component={Home} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/login">
            <RegisterLoginForm forLogin={true} />
          </Route>
          <Route path="/signup">
            <RegisterLoginForm fotLogin={false} />
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
