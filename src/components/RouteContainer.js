import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startSetRoute } from '../actions/location';
import LocationForm from './LocationForm';
import Map from './Map';
import ErrorWindow from './ErrorWindow';

const GOOGLE_URL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDKpzSptr4Y7IikRh3vEaGtrFFB8IfQDg8";

class RouteContainer extends Component {
  onSubmit = (startOffLocation, dropOffLocation) => {
    this.props.startSetRoute(startOffLocation, dropOffLocation);
  };

  onServerError = () => {
    return (
      <div>I am a server error</div>
    )
  }

  render() {
    return (  
      <div className="box-layout">
        <div className="box-layout__box">
          {this.props.serverError && <ErrorWindow errorMessage={this.props.serverError}/>}
          <LocationForm 
            onSubmit={this.onSubmit}
          />
          <Map
            googleMapURL={GOOGLE_URL}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            path={this.props.path}
          />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => ({
  startSetRoute: (startOffLocation, dropOffLocation) => dispatch(startSetRoute(startOffLocation, dropOffLocation))
});

const mapStateToProps = (state) => {
  return {
    path: state.location.path,
    totalDistance: state.location.totalDistance,
    totalTime: state.location.totalTime,
    routeErrorMessage: state.location.routeErrorMessage,
    routeInProgMessage: state.location.routeInProgMessage,
    serverError: state.location.serverError,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteContainer);
