import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <h1>Clientes</h1>
      </div>
    );
  }
}

const mapState = () => ({});
const mapActions = () => ({});

export default connect(mapState, mapActions)(Dashboard);
