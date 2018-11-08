import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
let customers = require('../customers.json');

class List extends React.Component {

    constructor(props) {
        super(props);
        this.filteredCustomers = customers;
    }

    openCustomer(id) {
        console.log(this.props);
        // this.props.history.push(id);
    }

    componentWillReceiveProps(nextProps) {
        this.filteredCustomers = customers.filter((customer) => {
            return customer.name.toLowerCase().indexOf(nextProps.searchedCustomer.toLowerCase()) > -1
        });
    }

    render() {
        return (
            <div>
                {this.filteredCustomers.map((customer) => {
                    return (
                        <div key={customer.id} onClick={() => this.openCustomer(customer.id)}>
                            <div>{customer.name}</div>
                            <div>
                                <span>{customer.city}</span>
                                <span>{customer.country}</span>
                                <span>{customer.zipCode}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default List; 
