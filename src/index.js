import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './Pages/HomePage';
import Register from './Pages/RegisterPage';
import Login from './Pages/LoginPage';
import Forums from './Pages/ForumsPage';
import DMing from './Pages/DmPage';

import indexRoutes from "./Routes/index"
import SideBar from './Components/SideBar';

const routing = (
  /*<Router >
    <Switch>
    {indexRoutes.map((route, key) => {
      return <Route path={route.path} component={route.component} key={key}>{route.page}</Route>;
    })}
  </Switch>
</Router>*/
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Registration</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/forums">Forums</Link>
        </li>
        <li>
          <Link to="/sidebar">SideBar</Link>
        </li>
        <li>
          <Link to="/dm">Direct Message</Link>
        </li>

      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/forums" component={Forums} />
      <Route path="/sidebar" component={SideBar} />
      <Route path="/dm" component={DMing} />

    </div>
  </Router>
)

ReactDOM.render(
  routing, document.getElementById('root')
);

