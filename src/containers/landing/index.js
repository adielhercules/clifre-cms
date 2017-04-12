import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Scrollchor from 'react-scrollchor';
import styled from 'styled-components';

import Signup from '../../components/account/signup';

const MainMenuComponent = ({ isFixed = false }) => (
  <Wrapper>
    <Logotype to="/">CLIFRE</Logotype>

    <Menu>
      {isFixed && <MenuItem><Scrollchor to="">inicio</Scrollchor></MenuItem>}
      <MenuItem><Scrollchor to="features" animate={{ offset: -10 }}>caracterisitcas</Scrollchor></MenuItem>
      <MenuItem><Scrollchor to="contact" animate={{ offset: -60 }}>contacto</Scrollchor></MenuItem>
      <Divider />
      <MenuItem><Link to="/account/signin" activeClassName="active">entrar</Link></MenuItem>
      <MenuItem><Scrollchor to="signup" animate={{ offset: -60 }} className="button-like">registrarme</Scrollchor></MenuItem>
    </Menu>
  </Wrapper>
);

let lastY = 0;
let firstTime = true;

class LandingPage extends Component {
  componentWillMount() {
    window.addEventListener('scroll', this.windowListener);
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.windowListener);
  }

  windowListener = () => {
    this.updateNavigationVisibility();
  }

  updateNavigationVisibility = () => {
    const fixed = document.querySelector('.fixed-top-menu');
    const absolute = document.querySelector('.absolute-top-menu');
    const top = document.getElementById('top');
    const scrollY = window.scrollY;
    const scrollingDown = scrollY > lastY;
    let distance = 0;

    if (scrollingDown) {
      distance = scrollY - lastY;
    } else {
      distance = lastY - scrollY;
    }

    if ((scrollingDown && scrollY > top.offsetHeight) || (firstTime && scrollingDown && distance > 50)) {
      fixed.classList.add('is-visible');
      absolute.classList.add('is-hidden');
    } else if ((!scrollingDown && scrollY < (top.offsetHeight - 100)) || (!scrollingDown && distance > 30)) {
      fixed.classList.remove('is-visible');
      absolute.classList.remove('is-hidden');
    }

    firstTime = false;
    lastY = scrollY;
  }

  render() {
    return (
      <div>
        <FlexLayout id="top">
          <Content>
            <MainMenu className="absolute-top-menu">
              <MainMenuComponent />
            </MainMenu>

            <Wrapper>
              <Hero id="hero">
                <div className="hero-cell">
                  <h1>Tus clientes tu exito</h1>
                  <p>Programa de fidelizacion y control de clientes frecuentes.</p>

                  <GettingStartedButton to="signup">Empezar Ahora</GettingStartedButton>
                </div>
              </Hero>
            </Wrapper>

            {/*<Container>
            <h1>Welcome to CLIFRE</h1>
            <Signup />
          </Container>

          <Container right>
            <Login />
          </Container>*/}
          </Content>
          <Overlay />
        </FlexLayout>

        <PlaceholderSpace />
        <Page id="page-content">
          <PageContent>
            <FixedMainMenu className="fixed-top-menu">
              <MainMenuComponent isFixed />
            </FixedMainMenu>

            <SignupBar id="features">
              <Wrapper>
                <h1>Features</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, saepe nisi explicabo
                voluptatibus facilis ullam incidunt omnis repudiandae molestias iste unde ea doloribus nam sit
                vel, veritatis eius, in earum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, saepe nisi explicabo
                voluptatibus facilis ullam incidunt omnis repudiandae molestias iste unde ea doloribus nam sit
                vel, veritatis eius, in earum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, saepe nisi explicabo
                voluptatibus facilis ullam incidunt omnis repudiandae molestias iste unde ea doloribus nam sit
                vel, veritatis eius, in earum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, saepe nisi explicabo
                voluptatibus facilis ullam incidunt omnis repudiandae molestias iste unde ea doloribus nam sit
                vel, veritatis eius, in earum.</p>
              </Wrapper>
            </SignupBar>

            <SignupBar id="contact">
              <Wrapper>
                <h1>Contact</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, saepe nisi explicabo
                voluptatibus facilis ullam incidunt omnis repudiandae molestias iste unde ea doloribus nam sit
                vel, veritatis eius, in earum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, saepe nisi explicabo
                voluptatibus facilis ullam incidunt omnis repudiandae molestias iste unde ea doloribus nam sit
                vel, veritatis eius, in earum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, saepe nisi explicabo
                voluptatibus facilis ullam incidunt omnis repudiandae molestias iste unde ea doloribus nam sit
                vel, veritatis eius, in earum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, saepe nisi explicabo
                voluptatibus facilis ullam incidunt omnis repudiandae molestias iste unde ea doloribus nam sit
                vel, veritatis eius, in earum.</p>
              </Wrapper>
            </SignupBar>

            <SignupBar id="signup">
              <Wrapper>
                <Signup />
              </Wrapper>
            </SignupBar>
          </PageContent>
        </Page>
      </div>
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

const WideHeight = 500;
const MaxWideHeight = 800;

const colorPallete = [
  'F9AE00',
  '4110AA', //blue
  '057A9B', //light blue
  'F9AE00'
];

const FlexLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: ${WideHeight}px;
  max-height: ${MaxWideHeight}px;
  height: 100vh;
  /*background: #ccc url(${ require('../../images/billiard.jpg') }) center center no-repeat;
  background-size: cover;
  -webkit-background-size: cover;*/
  color: #fff;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #F9AE00;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const Content = styled.div`
  position: relative;
  min-height: ${WideHeight}px;
  max-height: ${MaxWideHeight}px;
  height: 100vh;
  z-index: 1;
`;

const Logotype = styled(Link)`
  float: left;
  color: #fff;
`;

const MainMenu = styled.div`
  position: relative;
  margin: 40px 0 0;
  padding-bottom: 20px;
  text-align: right;
  transition: opacity 0.3s ease-in;

  &.is-hidden {
    opacity: 0;
  }
`;

const FixedMainMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: right;
  background-color: #2b2b2b;
  transform: translateY(-100%);
  transition: transform 0.3s ease-in;

  &.is-visible {
    transform: translateY(0);
  }
`;

const Menu = styled.ul`
  display: inline-block;
  margin: 0;
  list-style: none;
  text-align: left;
`;

const MenuItem = styled.li`
  display: inline-block;

  a {
    display: block;
    padding: 5px 0;
    margin: 0 15px;
    border-bottom: 2px solid transparent;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    opacity: 0.7;

    &,
    &:hover,
    &:active,
    &:focus {
      color: #fff;
    }

    &:hover,
    &:focus {
      opacity: 0.9;
    }

    &.active {
      opacity: 1;
      border-color: #fff;
    }


    &.button-like {
      padding: 10px;
      margin-left: 5px;
      background-color: #000;
      border-radius: 4px;
      opacity: 0.3;

      &:hover,
      &:focus {
        opacity: 0.5;
      }
    }
  }
`;

const Divider = styled.div`
  display: inline-block;
  vertical-align: middle;
  height: 25px;
  width: 1px;
  background-color: #fff;
  opacity: 0.3;
`;

const Page = styled.div`
  position: relative;
`;

const PlaceholderSpace = styled.div`
  min-height: ${WideHeight}px;
  max-height: ${MaxWideHeight}px;
  height: 100vh;
  pointer-events: none;
  visibility: hidden;
`;

const PageContent = styled.div`
  background-color: #fff;
`;

const SignupBar = styled.div`
  padding: 50px 0;
`;

const GettingStartedButton = styled(Scrollchor)`
  display: inline-block;
  padding: 15px 25px;
  background-color: #4110AA;
  text-decoration: none;
  font-size: 1.2em;
  border-radius: 5px;
  font-weight: bold;

  &,
  &:hover,
  &:focus {
    color: #fff;
  }
`;

const Hero = styled.div`
  position: absolute;
  top: 50%;
  display: table;
  min-height: 300px;
  max-height: 500px;
  transform: translateY(-50%);

  .hero-cell {
    display: table-cell;
    vertical-align: middle;

    h1 {
      max-width: 400px;
      color: #fff;
      font-weight: 500;
      letter-spacing: 1px;
      font-size: 4.5em;
      line-height: 1em;
    }

    p {
      color: #fff;
      font-size: 1.2em;
      padding: 20px 0;
    }
  }
`;

export default LandingPage;
