import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import Map from './Map.js';

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
  constructor(props) {
      super(props);
      this.state = {
          latitude: 59.4369,
          longitude: 24.7535,
          address: '',
          geocodeResults: {lat: 59.43696079999999, lng: 24.753574699999945},
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
                                      this.setState({
                                          latitude: lat,
                                          longitude: lng,
                                          geocodeResults: {lat: lat, lng: lng},
                                          loading: false,
                                      })
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

    const new_location = {
        geocodeResults: this.state.geocodeResults
    };
    console.log(new_location.geocodeResults);
    return (
       <PlacesAutocomplete
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                    classNames={cssClasses}
                    onSelect={this.handleSelect}
                    onEnterKeyDown={this.handleSelect}
                    onError={onError}
                    shouldFetchSuggestions={shouldFetchSuggestions}
       />
    )
  }
}

export default SearchBar
