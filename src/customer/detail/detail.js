import React, { Component } from 'react';
const customers = require('../customers.json');

class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditMode: false
        };
    }

    saveCustomer() {
        this.setState({ isEditMode: false });
    }

    cancelSave() {
        this.setState({ isEditMode: false });
    }

    render(props) {

        const customer = customers.filter((cust) => {
            return cust.id == this.props.match.params.id;
        })[0];

        return (
            <div>
                <div className="container">
                    <form className="form-horizontal" action="/action_page.php">
                        <div className="form-group">
                            <label className="control-label col-sm-2" >Full Name</label>
                            <div className="col-sm-10">
                                {this.state.isEditMode ? <input type="text" className="form-control" value={customer.name} id="email" placeholder="Full Name" /> : customer.name}
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" >Address</label>
                            <div className="col-sm-10">
                                {this.state.isEditMode ? <input type="text" className="form-control" id="email" placeholder="Address" /> : customer.address}

                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" >City</label>
                            <div className="col-sm-10">
                                {this.state.isEditMode ? <input type="text" className="form-control" id="email" placeholder="City" /> : customer.city}

                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" >Country</label>
                            <div className="col-sm-10">
                                {this.state.isEditMode ? <input type="text" className="form-control" id="email" placeholder="Country" /> : customer.country}
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2">Zip Code</label>
                            <div className="col-sm-10">
                                {this.state.isEditMode ? <input type="text" className="form-control" id="email" placeholder="Zip Code" /> : customer.zipCode}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                {this.state.isEditMode ? <div><button type="button" className="btn btn-default" onClick={() => this.cancelSave()}>Cancel</button>
                                    <button type="button" className="btn btn-default" onClick={() => this.saveCustomer()}>Save</button></div> : <button type="button" className="btn btn-default" onClick={() => this.setState({ isEditMode: true })} >Edit</button>}
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        );
    }
}

export default Detail;
