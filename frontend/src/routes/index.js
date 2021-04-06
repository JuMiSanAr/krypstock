import React from "react";
import { Switch, Route } from "react-router-dom";
import { Router } from 'react-router';
import history from '../history';
import Home from '../pages/home';
import Portfolio from "../pages/portfolio";
import AddRemove from "../pages/addRemove";
import Search from "../pages/search";
import News from "../pages/news";


function OurRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio/" exact component={Portfolio} />
        <Route path="/add-remove/" exact component={AddRemove} />
        <Route path="/search/" exact component={Search} />
        <Route path="/news/" exact component={News} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
}

export default OurRouter;