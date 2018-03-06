import React, { Component } from 'react';
import SearchBar from './SearchBar';

class Search extends Component {
    render() {
        return(
            <div className="mid-div">
                <div className="search">
                    <SearchBar handler = {this.handler}
                               ref={result => {
                                   this.result = result;
                               }}
                    />
                </div>
            </div>
        )
    }
}

export default Search;