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
        this.state = {
            selectedCustomerId: customers[0].id,
            customerList: customers
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            customerList: customers.filter((customer) => {
                return customer.name.toLowerCase().indexOf(nextProps.searchedCustomer.toLowerCase()) > -1
            })
        });
    }

    deleteCustomer(event, customerId) {
        event.stopPropagation();
        const customerToRemove = customers.filter((customer) => customer.id === customerId);
        const index = customers.indexOf(customerToRemove[0]);

        if (index != -1) {
            customers.splice(index, 1);
            this.setState({
                ...this.state, customerList: customers
            });
            this.setState({ ...this.state, selectedCustomerId: customers[0].id });
            this.props.openCustomer(customers[0].id);
        }
    }

    selectCustomer(e, customerId) {
        this.setState({ ...this.state, selectedCustomerId: customerId });
        this.props.openCustomer(customerId);
    }

    render() {
        return (
            <div>
                {this.state.customerList.map((customer) => {
                    return (
                        <li className="nav-item" className={"customer-info " + (this.state.selectedCustomerId === customer.id ? 'active' : '')} onClick={(e) => this.selectCustomer(e, customer.id)} key={customer.id}>
                            < a className="nav-link" href="javscript:void(0)" >
                                <div className="avatar col-sm-2">
                                    <img src={customer.avatarUrl} />
                                </div>
                                <div className="col-sm-10">
                                    <div className="customer-name">{customer.name}</div>
                                    <div className="small-info">
                                        <span>{customer.city}</span>,
                                    <span> {customer.country}</span>,
                                    <span> {customer.zipCode}</span>
                                    </div>
                                </div>
                                <span className="delete-record glyphicon glyphicon-trash" onClick={(e) => this.deleteCustomer(e, customer.id)}></span>
                            </a>
                        </li>
                    )
                })
                }
            </div >
        );
    }
}

export default List; 
