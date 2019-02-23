import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './Components/Pages/HomePage';
import Register from './Components/Pages/UserRegistration'
import Login from './Components/Pages/UserLogin'

const routing = (
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
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  )

ReactDOM.render(
    routing, document.getElementById('root')
);

