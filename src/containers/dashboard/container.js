import React, { Component }  from 'react';
import Header from '../../components/header.js';

export default class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard-container">
        <Header />

        <div className="container">
          { this.props.children }
        </div>
      </div>
    );
  }
}
