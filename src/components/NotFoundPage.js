import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="box-container">
    <div className="box-layout">
      <div className="box-layout__box">
        404 - <Link className="link" to="/">Go home</Link>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
