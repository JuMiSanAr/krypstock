import React from "react";
import { Switch, Route } from "react-router-dom";
import { Router } from 'react-router'
import history from '../history'


function OurRouter() {
  return (
    <Router history={history}>
      <Switch>
        {/* 
        <Route path="/" exact component={Home} />
        <Route path="/restaurant-page/:id/" exact component={RestaurantPage} />
        <Route path="/sign-in/" exact component={SignIn} />
        <Route path="/sign-up/" exact component={SignUp} /> */}
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
}

export default OurRouter;