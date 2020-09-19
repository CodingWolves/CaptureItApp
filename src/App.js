import React, {Component} from 'react'
import './App.css'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import { Dashboard } from './components/Dashboard'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Dashboard }/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
