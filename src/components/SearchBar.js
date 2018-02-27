import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
// import Map from './Map.js'
// import App from '../App.js';

const renderSuggestion = ({ formattedSuggestion }) => (
  <div className="suggestion-item">
    <i className="fa fa-map-marker suggestion-icon" />
    <strong>{formattedSuggestion.mainText}</strong>{' '}
    <small className="text-muted">{formattedSuggestion.secondaryText}</small>
  </div>
)

const cssClasses = {root: 'form-group', input: 'search-input', autocompleteContainer: 'autocomplete-container'};

const shouldFetchSuggestions = ({ value }) => value.length > 2;

const onError = (status, clearSuggestions) => {
  console.log(status);
  clearSuggestions();
};

// big ol class
class SearchBar extends Component {
  constructor() {
      super();
      this.state = {
          address: '',
          geocodeResults: {},
          loading: false,
      };
      this.handleSelect = this.handleSelect.bind(this);
      this.handleChange = this.handleChange.bind(this);

  }

  handleSelect(address) {
      this.setState({
          address,
          loading: true,
      });
      // turns address into coordinates and sets state to it
      geocodeByAddress(address).then(results => getLatLng(results[0]))
                                .then(
                                    ({ lat, lng }) => {
                                        // after successful location search, this sets new map center
                                      this.setState({
                                          geocodeResults: {lat: lat, lng: lng},
                                          loading: false,
                                      }, () => {
                                          console.log(this.props);
                                      });
                                      this.props.handler(this.state.geocodeResults);
                                })
                                  .catch(error => {
                                      console.log(error);
                                      this.setState({
                                          loading: false,
                                      })
                                  });
  };

  handleChange(address) {
      this.setState({
          address,
      });
  }

  getAddress() {
      return this.state.geocodeResults;
  }

  render() {
    const inputProps = {
      type: 'text',
      value: this.state.address,
      onChange: this.handleChange,
      autoFocus: true,
      placeholder: 'Enter your location',
      name: 'search-input',
      id: 'main-search-input',
    };

    return (<div>
                <PlacesAutocomplete
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                    classNames={cssClasses}
                    onSelect={this.handleSelect}
                    onEnterKeyDown={this.handleSelect}
                    onError={onError}
                    shouldFetchSuggestions={shouldFetchSuggestions}
               />
            </div>
    )
  }
}

export default SearchBar
