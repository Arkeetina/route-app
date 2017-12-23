import React, {Component} from 'react';

export default class LocationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startOffLocation: '',
      dropOffLocation: '',
      error: '',
      disabled: true,
    }
  }

  onStartOffLocationChange = event => {
    const startOffLocation = event.target.value;
    this.setState(() => ({ startOffLocation }));
  }

  onDropOffLocationChange = event => {
    const dropOffLocation = event.target.value;
    this.setState(() => ({ dropOffLocation }));
  }

  onSubmit = event => {
    event.preventDefault();
    if (!this.state.startOffLocation.trim() || !this.state.dropOffLocation.trim()) {
      this.setState(() => ({ error: 'Please provide start and drop off locations' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.setState(() => ({ disabled: true }));
      let startOffLocation = this.state.startOffLocation;
      let dropOffLocation = this.state.dropOffLocation;
      this.props.onSubmit({
        startOffLocation,
        dropOffLocation,
      })
    }
  }

  onFocus = () => {
    this.setState(() => ({ disabled: false }));
  }

  render() {
    const { startOffLocation, error, dropOffLocation, disabled } = this.state;

    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          className="text-input"
          onFocus={this.onFocus}
          placeholder="Enter start off location"
          type="text"
          value={this.state.startOffLocation}
          onChange={this.onStartOffLocationChange}
        />
        <input
          className="text-input"
          onFocus={this.onFocus}
          placeholder="Enter drop off location"
          type="text"
          value={this.state.dropOffLocation}
          onChange={this.onDropOffLocationChange}
        />
        <button
          disabled={!startOffLocation || !dropOffLocation || disabled}
          className="button"
          type="submit"
        >
          Send Location
        </button>
      </form>
    );
  }
}

