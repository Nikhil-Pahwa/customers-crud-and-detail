import React, { Component } from 'react';
import logo from './logo.svg';
import List from './customer/list/list';
import Search from './customer/search/search';
import Detail from './customer/detail/detail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      searchedText: ''
    }
    this.handleSearching = this.handleSearching.bind(this);
  }

  handleSearching(event) {
    this.setState({ searchedText: event });
  }

  render() {
    return (
      <div className="App">
        <div className="col-sm-2">
          <Search searchText={this.handleSearching}></Search>
          <List searchedCustomer={this.state.searchedText}></List>
        </div>
        <div className="col-sm-10">
          <Router>
            <Switch>
              <Route path="/detail/:id" component={Detail} exact />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
