import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import Login from '../../components/account/signin';
import Signup from '../../components/account/signup';

class LandingPage extends Component {
  render() {
    return (
      <FlexLayout>
        <Container>
          <h1>Welcome to CLIFRE</h1>
          <Signup />
        </Container>

        <Container right>
          <Login />
        </Container>
      </FlexLayout>
    );
  }
}

LandingPage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]),
  location: PropTypes.object
};

const FlexLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ccc url(${ require('../../images/billiard.jpg') }) center center no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  color: #fff;
`;


const Container = styled.div`
  position: absolute;
  bottom: 20px;
  ${props => props.right ? 'right': 'left'}: 50px;
  background: #fff;
  color: #444;
  padding: 30px;
  width: 400px;
`;

export default LandingPage;
