import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './Components/Pages/HomePage';

const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        {/* <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  )

ReactDOM.render(
    routing, document.getElementById('root')
);

