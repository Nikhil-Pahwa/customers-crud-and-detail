import React, { Component } from 'react';
import './detail.css';
const customers = require('../customers.json');

class Detail extends React.Component {

    constructor(props) {
        super(props);
        const selectedCustomer = this.filteredList(this.props.openCustomer)

        this.state = {
            isEditMode: false,
            selectedCustomer: selectedCustomer,
            inititalCustomer: Object.assign({}, selectedCustomer)
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            selectedCustomer: {
                ... this.state.selectedCustomer,
                [event.target.name]: event.target.value
            }
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...this.state,
            isEditMode: false,
            selectedCustomer: this.filteredList(nextProps.openCustomer)
        })
    }

    filteredList(custId) {
        return customers.filter((cust) => {
            return cust.id == custId;
        })[0];
    }

    saveCustomer() {
        this.setState({ isEditMode: false });
        console.warn('make http request to save customer');
    }

    cancelSave() {
        this.setState({ isEditMode: false });
        this.setState({ selectedCustomer: this.state.selectedCustomer });
    }

    render(props) {
        const customer = this.state.selectedCustomer;
        return (
            <div>
                <h1> Customer Detail </h1>
                <div className="container">
                    <div className="avatar-big">
                        <img src={customer.avatarUrl} />
                    </div>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="control-label col-sm-2" >Full Name</label>
                            <div className="col-sm-10">
                                {this.state.isEditMode ? <input type="text" className="form-control" onChange={this.handleChange} value={this.state.selectedCustomer.name} id="name" name="name" placeholder="Full Name" /> : this.state.selectedCustomer.name}
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" >Address</label>
                            <div className="col-sm-10">
                                {this.state.isEditMode ? <input type="text" className="form-control" onChange={this.handleChange} value={customer.address} id="address" name="address" placeholder="Address" /> : customer.address}
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" >City</label>
                            <div className="col-sm-10">
                                {this.state.isEditMode ? <input type="text" className="form-control" onChange={this.handleChange} value={customer.city} id="city" name="city" placeholder="City" /> : customer.city}
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" >Country</label>
                            <div className="col-sm-10">
                                {this.state.isEditMode ? <input type="text" className="form-control" onChange={this.handleChange} value={customer.country} id="country" name="country" placeholder="Country" /> : customer.country}
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2">Zip Code</label>
                            <div className="col-sm-10">
                                {this.state.isEditMode ? <input type="text" className="form-control" onChange={this.handleChange} value={customer.zipCode} id="zipCode" name="zipCode" placeholder="Zip Code" /> : customer.zipCode}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                {this.state.isEditMode ? <div className="btn-toolbar"><button type="button" className="btn btn-default" onClick={() => this.cancelSave()}>Cancel</button>
                                    <button type="button" className="btn btn-primary" onClick={() => this.saveCustomer()}>Save</button></div> : <button type="button" className="btn btn-primary" onClick={() => this.setState({ isEditMode: true })} >Edit</button>}
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        );
    }
}

export default Detail;
