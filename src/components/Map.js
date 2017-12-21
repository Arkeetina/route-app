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

  componentWillReceiveProps(nextProps) {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
      // не круть, вообще не круть
      origin: new google.maps.LatLng(nextProps.path[0][0], nextProps.path[0][1]),
      waypoints: [{location: `${nextProps.path[1][0]}, ${nextProps.path[1][1]}`,}],
      destination: new google.maps.LatLng(nextProps.path[2][0], nextProps.path[2][1]),
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

  render() {
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={new google.maps.LatLng(22.28552, 114.15769)}
      >
        {this.state.directions && <DirectionsRenderer directions={this.state.directions} />}
      </GoogleMap>
    );
  }
}

export default withGoogleMap(Map);
