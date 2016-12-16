import React from 'react';
import { Link } from 'react-router';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to CLIFRE</h1>
      <Link to="/dashboard">Go to dashboard</Link>
    </div>
  );
};

export default LandingPage;
