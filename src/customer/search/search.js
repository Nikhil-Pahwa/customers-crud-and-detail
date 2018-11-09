import React, { Component } from 'react';
import './search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
        this.handleSearching = this.handleSearching.bind(this);
    }

    handleSearching(event) {
        this.setState({ searchText: event.target.value });
        this.props.searchText(event.target.value);
    }

    clearField() {
        this.setState({ searchText: '' })
        this.props.searchText('');
    }

    render() {
        return (
            <div className="search-container">
                <input className="form-control form-control-dark w-100" type="text" value={this.state.searchText} onChange={this.handleSearching} placeholder="Search customer" aria-label="Search" />
                {this.state.searchText !== '' ? <span className="cross-icon" onClick={() => this.clearField()}>x</span> : ''}
            </div>
        );
    }
}

export default Search; 
