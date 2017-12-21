import React, {Component} from 'react';

export default class  LocationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startOffLocation: '',
      dropOffLocation: '',
      error: '',
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
      let startOffLocation = this.state.startOffLocation;
      let dropOffLocation = this.state.dropOffLocation;
      this.props.onSubmit(startOffLocation, dropOffLocation);
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
        <input
          placeholder="Enter start off location"
          type="text"
          value={this.state.startOffLocation}
          onChange={this.onStartOffLocationChange}
        />
        <input
          placeholder="Enter drop off location"
          type="text"
          value={this.state.dropOffLocation}
          onChange={this.onDropOffLocationChange}
        />
        <button
          className="msgButton"
          type="submit"
        >
        Send Location
        </button>
      </form>
    );
  }
}

