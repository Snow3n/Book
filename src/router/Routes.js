import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Home , Login, Profile, Registration } from '../pages';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/home" />} />
        <Route
          exact
          path="/home"
          render={() => <Home />}
        />
        <Route
          exact
          path="/login"
          render={() => <Login />}
        />
        <Route
          exact
          path="/registration"
          render={() => <Registration />}
        />
        <Route
          exact
          path="/profile/:id"
          render={() => <Profile />}
        />
        <Route path="*" />
    </Switch>
  </Router>
  );
};
