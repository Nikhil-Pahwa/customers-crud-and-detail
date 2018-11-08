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
            <div>Search
                <input type="text" value={this.state.searchText} onChange={this.handleSearching} />
            </div>
        );
    }
}

export default Search; 
