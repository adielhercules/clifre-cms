import React, { Component, PropTypes }  from 'react';
import { connect } from 'react-redux';
import { Spinner } from '@blueprintjs/core';

import Header from '../../components/header.js';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard-container">
        <Header />

        <div className="container vertical-padding">
          { this.props.loading && (
            <Spinner className="pt-large" intent="warning" />
          ) }
          { !this.props.loading && this.props.children }
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.element,
};

const mapState = () => ({
  loading: false
});

export default connect(mapState)(Container);
