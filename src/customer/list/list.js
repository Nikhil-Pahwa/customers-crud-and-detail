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
            selectedCustomerId: customers[0].id
        }
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
                        <li className="nav-item" className={"customer-info " + (this.state.selectedCustomerId === customer.id ? 'active' : '')} key={customer.id} onClick={() => { this.setState({ selectedCustomerId: customer.id }); this.props.openCustomer(customer.id) }}>
                            < a className="nav-link" href="#" >
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
