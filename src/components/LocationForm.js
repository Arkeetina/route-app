import React, {Component} from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import { defaultStyles } from './styles/formInputStyles';

export default class LocationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // drop and start off locations props check is set up for the tests
      startOffLocation: '',
      dropOffLocation: '',
      secondDropOffLocation: '',
      error: '',
      disabled: true,
    }
   }

  // enables Send Location button on focus
  onFocus = () => {
    this.setState(() => ({ disabled: false }));
  }

  // sets start off location state
  startOffLocationChange = startOffLocation => {
    this.setState(() => ({ startOffLocation }));
  }

  //sets drop off location state
  dropOffLocationChange = dropOffLocation => {
    this.setState(() => ({ dropOffLocation }));
  }

  //sets second drop off location state
  secondDropOffLocationChange = secondDropOffLocation => {
    this.setState(() => ({ secondDropOffLocation }));
  }

  //submits form with start off and drop off locations
  onSubmit = event => {
    event.preventDefault();
    const { 
      startOffLocation,
      dropOffLocation,
      secondDropOffLocation } = this.state;
      
    this.setState(() => ({ error: '' }));
    this.setState(() => ({ disabled: true }));
    this.props.onSubmit({
      startOffLocation,
      dropOffLocation,
      secondDropOffLocation,
    });
  }

  render() {
    const {
      startOffLocation,
      secondDropOffLocation,
      error,
      dropOffLocation,
      disabled } = this.state;

    const startOffInputProps = {
      value: startOffLocation,
      onChange: this.startOffLocationChange,
      onFocus: this.onFocus,
      type: "text",
      placeholder: "Enter start off location",
    };

    const dropOffInputProps = {
      value: dropOffLocation,
      onChange: this.dropOffLocationChange,
      onFocus: this.onFocus,
      type: "text",
      placeholder: "Enter 1st drop off location",
    };

    const secondDropOffInputProps = {
      value: secondDropOffLocation,
      onChange: this.secondDropOffLocationChange,
      onFocus: this.onFocus,
      type: "text",
      placeholder: "Enter 2nd drop off location",
    };

    const options = {
      location: new google.maps.LatLng(22.2, 114.1),
      radius: 3000,
      types: ['address'],
    };

    return (
      <form className="form" onSubmit={this.onSubmit}>
        <PlacesAutocomplete
          inputProps={startOffInputProps}
          styles={defaultStyles}
          options={options}
          googleLogo={false}
        />
        <PlacesAutocomplete
          inputProps={dropOffInputProps}
          styles={defaultStyles}
          options={options}
          googleLogo={false}
        />
        <PlacesAutocomplete
          inputProps={secondDropOffInputProps}
          styles={defaultStyles}
          options={options}
          googleLogo={false}
        />
        <button
          disabled={!startOffLocation || !dropOffLocation || !secondDropOffLocation || disabled}
          className="button"
          type="submit"
        >
          Send Location
        </button>
      </form>
    );
  }
}

