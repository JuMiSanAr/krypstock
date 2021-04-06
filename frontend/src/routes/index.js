import React from "react";
import { Switch, Route } from "react-router-dom";
import { Router } from 'react-router';
import history from '../history';
import Home from '../pages/home';

function OurRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
}

export default OurRouter;