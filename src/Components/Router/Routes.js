import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import HomePage from './../Pages/HomePage'

const routing = (
  <Router>
    <div>
      <Route path="/" component={HomePage} />

    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))