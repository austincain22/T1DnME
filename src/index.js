import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import indexRoutes from "./Routes/index"

const routing = (
  <Router >
    <Switch>
    {indexRoutes.map((route, key) => {
      return <Route path={route.path} component={route.component} key={key} />;
    })}
  </Switch>
</Router>
  )

ReactDOM.render(
    routing, document.getElementById('root')
);

