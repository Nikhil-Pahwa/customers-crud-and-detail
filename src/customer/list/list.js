import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const customers = require('../customers.json');

class List extends React.Component {
    
    constructor() {
        super(); 
    }

    render() {
        return(
            <div>
                {customers.map((customer)=>{
                    return (
                        <Link key={customer.id} to={`/detail/${customer.id}`} >{customer.name}</Link> 
                    )
                 })}
            </div>
        );
    }
}

export default List; 
