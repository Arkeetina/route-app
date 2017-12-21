import React from 'react';

const ErrorWindow = props => (
  <div className="box-layout__box">
    <p>{props.errorMessage}</p>
  </div>
);

export default ErrorWindow;