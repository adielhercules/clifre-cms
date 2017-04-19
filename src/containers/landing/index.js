import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Scrollchor from 'react-scrollchor';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';

import Signup from '../../components/account/signup';

const MainMenuComponent = ({ isFixed = false }) => (
  <Wrapper>
    <Logotype to="/">CLIFRE</Logotype>

    <Menu>
      <If condition={isFixed}>
        <MenuItem><Scrollchor to="">inicio</Scrollchor></MenuItem>
      </If>
      <MenuItem><Scrollchor to="services">servicios</Scrollchor></MenuItem>
      <MenuItem><Scrollchor to="features" animate={{ offset: -60 }}>caracterisitcas</Scrollchor></MenuItem>
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

            <Wrapper relative fullHeight>
              <HeroImage>
                <img src="https://placeholdit.imgix.net/~text?txtsize=33&bg=d3d3d3&txtclr=000000&txt=clifre&w=720&h=480" alt=""/>
              </HeroImage>
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

            <Services id="services">
              <Wrapper>
                <h2>Fideliza tus clientes frecuentes en segundos&hellip;</h2>

                <Row className="services">
                  <Col xs={6} md={4} className="services__item">
                    <h1>1</h1>
                    <h3>Crea una cuenta</h3>
                    <p>Crea una cuenta (es gratis) y accede con tus credenciales.</p>
                  </Col>
                  <Col xs={6} md={4} className="services__item">
                    <h1>2</h1>
                    <h3>Crea una tarjeta</h3>
                    <p>Crea y personaliza una tarjeta en menos de 5 minutos.</p>
                  </Col>
                  <Col xs={6} md={4} className="services__item">
                    <h1>3</h1>
                    <h3>Fideliza tus clientes</h3>
                    <p>Comparte la tarjeta con tus clientes y empieza a fidelizar.</p>
                  </Col>
                </Row>
              </Wrapper>
            </Services>

            <Features id="features">
              <Wrapper>
                <h2>Todo lo que necesita</h2>
              </Wrapper>
            </Features>

            <SignupBar id="signup">
              <Wrapper>
                <Signup />
              </Wrapper>
            </SignupBar>

            <Footer>
              <Wrapper>
                <Row className="footer">
                  <Col md={3}>
                    <Link to="/" className="logotype">CLIFRE</Link>
                    <p>Programa de fidelizacion y control de clientes frecuentes.</p>
                  </Col>
                  <Col md={9}>
                    <Row>
                      <Col md={3}>
                        <ul className="footer__menu">
                          <li className="footer__menu__item--heading">Saber mas</li>
                          <li className="footer__menu__item"><Scrollchor to="services">Como funciona?</Scrollchor></li>
                          <li className="footer__menu__item"><Scrollchor to="features">Caracteristicas</Scrollchor></li>
                          <li className="footer__menu__item"><Link to="/sitemap">Mapa del Sitio</Link></li>
                        </ul>
                      </Col>
                      <Col md={3}>
                        <ul className="footer__menu">
                          <li className="footer__menu__item--heading">Soporte</li>
                          <li className="footer__menu__item"><Scrollchor to="/services">Como funciona?</Scrollchor></li>
                          <li className="footer__menu__item"><Scrollchor to="/features">Caracteristicas</Scrollchor></li>
                          <li className="footer__menu__item"><Link to="/sitemap">Mapa del Sitio</Link></li>
                        </ul>
                      </Col>
                      <Col md={3}>
                        <ul className="footer__menu">
                          <li className="footer__menu__item--heading">Nosotros</li>
                          <li className="footer__menu__item"><Scrollchor to="/services">Como funciona?</Scrollchor></li>
                          <li className="footer__menu__item"><Scrollchor to="/features">Caracteristicas</Scrollchor></li>
                          <li className="footer__menu__item"><Link to="/sitemap">Mapa del Sitio</Link></li>
                        </ul>
                      </Col>
                      <Col md={3}>
                        <div>
                          <Scrollchor to="signup">Crear cuenta (gratis)</Scrollchor>
                        </div>
                        <div>
                          o <Link to="/account/signup">Entrar</Link>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <div className="footer-copyright">
                  Todos los derechos reservados. Clifre { new Date().getFullYear() }
                </div>
              </Wrapper>
            </Footer>
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

  ${props => {
    let extraCss = '';
    if (props.relative) {
      extraCss += `
        position: relative;
      `;
    }

    if (props.fullHeight) {
      extraCss += `
        height: 100%;
      `;
    }

    return extraCss;
  }}
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
  margin: 0;
  padding-top: 40px;
  padding-bottom: 20px;
  text-align: right;
  background-color: #F9AE00;
  background-color: rgba(249, 174, 0, 0.9);
  z-index: 2;
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
  z-index: 99;

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
    margin: 0 14px;
    border-bottom: 2px solid transparent;
    font-size: 14px;
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
  padding: 100px 0;
  background-color: #F9AE00;
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
  width: 48%;
  padding-bottom: 150px;
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

const HeroImage = styled.div`
  position: absolute;
  top: 50%;
  left: 52%;
  width: 48%;
  padding-bottom: 150px;
  transform: translateY(-50%);

  img {
    display: block;
  }
`;

const Services = styled.div`
  padding: 100px 0;

  h2 {
    display: block;
    max-width: 400px;
    color: #F9AE00;
    font-weight: 500;
    line-height: 1.2em;

    &:after {
      content: "";
      display: block;
      margin-top: 20px;
      width: 80px;
      height: 3px;
      background-color: #4110AA;
    }
  }

  .services {
    margin-top: 50px;

    &__item {
      display: block;
      margin: 0 auto;
      max-width: 300px;
      padding-bottom: 100px;

      h1 {
        display: block;
        text-align: center;
        margin: 0;
        padding: 25px 50px 25px 0;
        color: #999;
        font-size: 200px;
        font-weight: 500;
        opacity: 0.5;
      }

      h3 {
        color: #F9AE00;
        font-weight: 500;
      }

      p {
        margin-top: 30px;
        color: #909090;
      }
    }
  }
`;

const Features = styled.div`
  padding: 100px 0;
  background-color: #eef5f9;
`;

const Footer = styled.div`
  padding: 100px 0;
`;

export default LandingPage;
