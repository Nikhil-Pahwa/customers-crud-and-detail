import React, { Component } from 'react';

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

    render() {
        return (
            <div>
                <input className="form-control form-control-dark w-100" type="text" value={this.state.searchText} onChange={this.handleSearching} placeholder="Search" aria-label="Search" />
            </div>
        );
    }
}

export default Search; 
