import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import uuid from 'uuid';

import StatusBarText from './StatusBarText';

class StatusBar extends Component {
  loaderRender = () => {
    const { loading } = this.props;
    if (loading) {
      return <img className="loader__image" src="/images/loader.gif"/>;
    }
  }

  defaultMsgRender = () => {
    const { defaultMsg } = this.props;
    if (defaultMsg) {
      return <StatusBarText message={defaultMsg}/>;
    }
  }

  routeInProgStatusRender = () => {
    const { routeInProgStatus } = this.props;
    if (routeInProgStatus) {
      return <StatusBarText message={routeInProgStatus}/>;
    }
  }

  routeFailStatusRender = () => {
    const { routeFailStatus } = this.props;
    if (routeFailStatus) {
      return <StatusBarText message={routeFailStatus}/>;
    }
  }

  serverErrorRender = () => {
    const { serverError } = this.props;
    const message = "Connection Error, please try again later";

    if (serverError) {
      return <StatusBarText message={message}/>;
    }
  }

  pathRender = () => {
    const { totalTime, totalDistance } = this.props;
    if (totalDistance && totalTime) {
      return <StatusBarText distance={totalDistance} time={totalTime}/>;
    }
  }
  
  render() {
    return (
      <div key={uuid()} className="status-bar status-bar__content">
        <ReactCSSTransitionGroup
          transitionName="anim"
          transitionEnterTimeout={500}
          transitionAppear
          transitionAppearTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {this.defaultMsgRender()}
          {this.routeInProgStatusRender()}
          {this.routeFailStatusRender()}
          {this.serverErrorRender()}
          {this.pathRender()}
          {this.loaderRender()}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default StatusBar;
