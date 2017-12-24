import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from 'react-google-maps';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directions: '',
    };
  }

  componentWillReceiveProps({ path }) {
    // path is passed as a prop from the parent component
    if (path) {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(path[0][0], path[0][1]),
        waypoints: [{
          location: `${path[1][0]}, ${path[1][1]}`,
        }],
        destination: new google.maps.LatLng(path[2][0], path[2][1]),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  }

  render() {
    return (
      <div>
        <GoogleMap
          defaultZoom={12}
          defaultCenter={new google.maps.LatLng(22.28552, 114.15769)}
        >
          {this.state.directions && <DirectionsRenderer directions={this.state.directions} />}
        </GoogleMap>
      </div>
    );
  }
}

export default withGoogleMap(Map);
