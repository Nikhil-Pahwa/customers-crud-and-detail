import React, { Component } from 'react';
import logo from './logo.svg';
import List from './customer/list/list';
import Search from './customer/search/search';
import Detail from './customer/detail/detail';
import './App.css';
import '../node_modules/contact-me-custom/bin/elements.js';

let customers = require('./customer/customers.json');


class App extends Component {

  constructor(props) {
    super();
    this.state = {
      searchedText: '',
      custId: customers[0].id
    }
    this.handleSearching = this.handleSearching.bind(this);
  }

  handleSearching(event) {
    this.setState({ searchedText: event });
  }

  render() {
    return (
      <div className="App">


        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Customer Management</a>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <Search searchText={this.handleSearching}></Search>
                  <List searchedCustomer={this.state.searchedText} openCustomer={(customerId) => this.setState({ ...this.state, custId: customerId })}></List>
                </ul>
              </div>
            </nav>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <Detail openCustomer={this.state.custId}></Detail>
              <contact-me author="Nikhil Pahwa" label="React!"></contact-me>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
