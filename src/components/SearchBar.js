import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { withRouter } from 'react-router';
import history from './History.js';
// import axios from 'axios';
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

const EnterButton= () => (
    <button className="btn" type="button">
        <span>Enter</span>
    </button>
);

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
                                        this.handleSubmit(-24, 55);
                                        // this.props.router.push('/results')
                                      // this.setState({
                                      //     geocodeResults: {lat: lat, lng: lng},
                                      //     loading: false,
                                      // });
                                      // console.log(this.state.geocodeResults);
                                })
                                  .catch(error => {
                                      console.log(error);
                                      this.setState({
                                          loading: false,
                                      })
                                  });

  };

    handleSubmit(lat, lng) {
        // console.log(this.state);
        let initial_center = {lat: 59.4, lng: 24.7};
        // lat = this.state.geocodeResults.lat;
        // lng = this.state.geocodeResults.lng;
        lat = initial_center.lat;
        lng = initial_center.lng;
        const location = {
            pathname: '/results',
            state: {
                message: "hello, im a passed message!"
            }
        };
        history.push({
            pathname: '/results',
            lat: lat,
            lng: lng
        });
    }

  handleChange(address) {
      this.setState({
          address,
      });
      console.log(this.state.geocodeResults);
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
