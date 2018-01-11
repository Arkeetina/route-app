import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

const StatusBarText = ({
  defaultMsg,
  message,
  distance,
  time
}) => (
  <div>
    {message && <p className="status-bar__text" key={uuid()}>{message}</p>}
    {time && <p className="status-bar__text" key={uuid()}>Travel time {Math.round(time / 60)} min.</p>}
    {distance && <p className="status-bar__text" key={uuid()}>Total distance {distance / 1000} km</p>}
  </div>
);


export default StatusBarText;
