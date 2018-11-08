import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './list.css';
let customers = require('../customers.json');

class List extends React.Component {

    constructor(props) {
        super(props);
        this.filteredCustomers = customers;
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
                        <div className="customer-info" key={customer.id} onClick={() => this.props.openCustomer(customer.id)}>
                            <div className="avatar col-sm-2">
                                <img src="../resources/img_avatar.png" />
                            </div>
                            <div className="col-sm-10">
                                <div className="customer-name">{customer.name}</div>
                                <div className="small-info">
                                    <span>{customer.city}</span>,
                                    <span>{customer.country}</span>,
                                    <span>{customer.zipCode}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default List; 
