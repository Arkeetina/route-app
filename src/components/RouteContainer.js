import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startSetRoute } from '../actions/location';
import LocationForm from './LocationForm';
import Map from './Map';
import StatusBar from './StatusBar';

const GOOGLE_URL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDKpzSptr4Y7IikRh3vEaGtrFFB8IfQDg8";

export class RouteContainer extends Component {
  onSubmit = (locations) => {
    this.props.startSetRoute(locations);
  };

  render() {
    const {
      defaultMsg,
      path,
      routeInProgStatus,
      routeFailStatus,
      serverError,
      totalDistance,
      totalTime,
    } = this.props;

    return (
      <div className="box-container">
        <StatusBar
          defaultMsg={defaultMsg}
          routeFailStatus={routeFailStatus}
          routeInProgStatus={routeInProgStatus}
          serverError={serverError}
          totalTime={totalTime}
          totalDistance={totalDistance}
        />
        <div className="box-layout">
          <div className="box-layout__box">
            <LocationForm
              onSubmit={this.onSubmit}
            />
            <Map
              googleMapURL={GOOGLE_URL}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              path={path}
            />
          </div>
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
    defaultMsg: state.location.defaultMsg,
    path: state.location.path,
    routeFailStatus: state.location.routeFailStatus,
    routeInProgStatus: state.location.routeInProgStatus,
    serverError: state.location.serverError,
    totalDistance: state.location.totalDistance,
    totalTime: state.location.totalTime,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteContainer);
