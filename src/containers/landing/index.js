import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <div>
      <h1>Welcome to CLIFRE</h1>
      <Link to="/dashboard">Go to dashboard</Link>
    </div>
  );
};
