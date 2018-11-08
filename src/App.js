import React, { Component } from 'react';
import logo from './logo.svg';
import List from './customer/list/list';
import Edit  from './customer/edit/edit';
import Detail from './customer/detail/detail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <Switch>
            <Route path="/" component={List} exact/>
            <Route path="/edit/:id" component={Edit} exact/>
            <Route path="/detail/:id" component={Detail} exact/>
            </Switch>
         </Router>
      </div>
    );
  }
}

export default App;
