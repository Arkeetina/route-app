import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import uuid from 'uuid';

const StatusBar = ({
  defaultMsg,
  routeInProgStatus,
  routeFailStatus,
  serverError,
  totalDistance,
  totalTime,
}) => (
  <div key={uuid()} className="status-bar status-bar__content">
    <ReactCSSTransitionGroup
      transitionName="anim"
      transitionEnterTimeout={500}
      transitionAppear
      transitionAppearTimeout={1000}
      transitionLeaveTimeout={1000}
    >
      {defaultMsg &&
        <p className="status-bar__default-msg" key={uuid()}>{defaultMsg}</p>}

      {serverError &&
        <p className="status-bar__text" key={uuid()}>
          There was a connection error, please try again
        </p>}

      {routeInProgStatus &&
        <p className="status-bar__text" key={uuid()}>{routeInProgStatus}</p>}

      {routeFailStatus &&
        <p className="status-bar__text" key={uuid()}>
          {routeFailStatus}. Please choose another destination
        </p>}

      {totalTime &&
        <p className="status-bar__text" key={uuid()}>Travel time {totalTime / 100} min.</p>}

      {totalDistance &&
        <p className="status-bar__text" key={uuid()}>Total distance {totalDistance / 1000} km</p>}

    </ReactCSSTransitionGroup>
  </div>
);


export default StatusBar;
