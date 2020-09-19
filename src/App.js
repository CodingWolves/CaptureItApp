import React, {Component} from 'react'
import './App.css'

import {HashRouter, Route, Switch} from 'react-router-dom'

import { Dashboard } from './components/Dashboard'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={ Dashboard }/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
