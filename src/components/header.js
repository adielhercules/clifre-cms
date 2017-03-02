import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
import styled from 'styled-components';
import { Popover, Position, Menu, MenuItem, MenuDivider, Button } from '@blueprintjs/core';

import { COLORS, FONTS, lighten, darken } from '../utils/style/theme';

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      searchQuery: '',
    };

    this.searchQueryChange = this.searchQueryChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  searchQueryChange() {
    //To-do
  }

  onChange(event, target, stateKeyName) {
    this.setState({ [stateKeyName]: event.target.value });
    this.searchQueryChange(event, target);
  }

  handleClick(e) {
    e.preventDefault();

    const { router } = this.props;
    const base = `${location.protocol}//${location.host}`;
    const pathname = e.nativeEvent.target.href.replace(base, '');
    router.push({
      pathname,
      query: { ref: 'settings' },
      state: { fromDashboard: true }
    });
  }

  render() {
    const popoverContent = (
      <Menu>
        <MenuDivider title="Configuraci&oacute;n" />
        <MenuItem
          iconName="cog"
          onClick={this.handleClick}
          href="/dashboard/settings/profile"
          text="Editar perfil" />
        <MenuItem
          iconName="lock"
          onClick={this.handleClick}
          href="/dashboard/settings/password"
          text="Cambiar clave" />
        <MenuDivider />
        <MenuItem text="Salir" iconName="log-out" onClick="" href="/" />
      </Menu>
    );

    const popoverAddItemContent = (
      <Menu>
        <MenuItem
          iconName="user"
          onClick={this.handleClick}
          href="/dashboard/add"
          text="Agregar usuario" />
      </Menu>
    );

    const mobileMenuContent = (
      <Menu>
        <MenuItem
          iconName="dashboard"
          onClick={this.handleClick}
          href="/dashboard"
          text="Resumen" />
        <MenuItem
          iconName="cog"
          onClick={this.handleClick}
          href="/dashboard/settings/card"
          text="Ajustes de tarjeta" />
        <MenuDivider title="Agregar" className="item-visible-mobile" />
        <MenuItem
          className="item-visible-mobile"
          iconName="user"
          onClick={this.handleClick}
          href="/dashboard/settings/add"
          text="Agregar usuario" />
      </Menu>
    );

    return (
      <HeaderWrapper>
        <div className="container">
          <div className="left">
            <Link to="/dashboard" className="logotype">CLIFRE</Link>

            <form method="POST">
              <SearchInputWrapper>
                <span className="pt-icon pt-icon-search" />
                <input
                  type="text"
                  id="query"
                  name="query"
                  className={this.state.searchQuery.trim().length ? 'notempty' : ''}
                  value={this.state.searchQuery}
                  onChange={(event) => { this.onChange(event, this, 'searchQuery'); }} />
                <label htmlFor="query">buscar&hellip;</label>

                <input type="submit" />
              </SearchInputWrapper>
            </form>
          </div>

          <div className="right">
            <NavigationTabs className="tabs">
              <ul>
                <li className="menu-item">
                  <Link
                    activeClassName={'active'}
                    to="/dashboard"
                    onlyActiveOnIndex>RESUMEN</Link>
                </li>
                <li className="menu-item">
                  <Link
                    activeClassName={'active'}
                    to="/dashboard/settings/card"
                    onlyActiveOnIndex>AJUSTES DE TARJETA</Link>
                </li>

                <li className="mobile-menu">
                  <Popover content={mobileMenuContent} position={Position.BOTTOM}>
                    <Button iconName="more" text="Menu" />
                  </Popover>
                </li>

                <li className="add-item">
                  <Popover content={popoverAddItemContent}
                           position={Position.BOTTOM}>
                    <Link to="javascript:;" onClick={ e => e.preventDefault() }>
                      <span className="pt-icon-plus" />
                    </Link>
                  </Popover>
                </li>

                <li className="separator" />

                <li className="user-menu">
                  <Popover content={popoverContent}
                           position={Position.BOTTOM_RIGHT}>
                    <AvatarWrapper>
                      <Link className="avatar" to="javascript:;" onClick={ e => e.preventDefault() }>
                        <div className="avatar-image">
                          <img src={require('./johndoe.jpg')} alt=""/>
                        </div>

                        <span className="pt-icon pt-icon-chevron-down" />
                      </Link>
                    </AvatarWrapper>
                  </Popover>
                </li>
              </ul>
            </NavigationTabs>
          </div>
        </div>
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  router: PropTypes.object
};

const HeaderWrapper = styled.div`
  height: 70px;
  background-color: ${ COLORS.PRIMARY };
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;

  [class*='container'] {
    flex: 1;
    align-items: center;
    display: flex;
  }

  .left,
  .right{
    flex-direction: column;
    flex: 1;

    form {
      display: inline-block;
    }
  }

  .right {
    text-align: right;
    display: flex;
  }

  .logotype {
    font-weight: 600;

    &,
    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }

  [class*="item-visible-mobile"] {
    @media screen and (min-width: 481px) {
      display: none;
    }
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
  margin-left: 20px;

  @media screen and (max-width: 600px) {
    display: none;
  }

  input[type="submit"]{
    opacity: 0;
    position: absolute;
    visibility: hidden;
    pointer-events: none;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  label {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -0.6em;
    padding-left: 25px;
    text-transform: uppercase;
    font-family: ${ FONTS.ROBOTO };
    color: ${ COLORS.SEARCH_COLOR };
    cursor: text;
  }

  span {
    color: ${ COLORS.SEARCH_ICON_COLOR };
    position: absolute;
    font-size: 0.8em;
    z-index: 1;
    top: 50%;
    left: 8px;
    margin-top: -0.5em;
    pointer-events: none;
  }

  input[type="text"] {
    position: relative;
    cursor: text;
    border: none;
    color: ${ COLORS.SEARCH_ICON_COLOR };
    padding-left: 25px;
    line-height: 2;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background-color: transparent;


    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px #bd9113,
                  0 0 0 3px rgba(189, 145, 19, 0.3),
                  inset 0 1px 1px rgba(26, 25, 16, 0.2);
      background-color: #f7c156;
    }

    &:focus + label,
    &.notempty + label {
      display: none;
    }
  }
`;

const NavigationTabs = styled.div`
  text-align: left;
  align-self: flex-end;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;

    li {
      display: inline-block;

      &.menu-item {
        @media screen and (max-width: 800px) {
          display: none;
        }
      }

      &.mobile-menu {
        display: none;

        @media screen and (max-width: 800px) {
          display: inherit;
        }

        [class*="pt-popover-target"] {
          align-self: center;
        }
      }

      &.add-item {
        position: relative;
        margin-left: 15px;

        @media screen and (max-width: 480px) {
          display: none;
        }

        a {
          display: block;
          height: 50px;
          width: 50px;
          background-color: #fff;
          border-radius: 50%;
          padding: 0;
          line-height: 50px;
          font-size: 2em;
          text-align: center;
          margin: 8px 0 0;
          transition:  transform 0.2s, opacity 0.2s;

          @media screen and (max-width: 800px) {
            margin-top: 0;
          }

          &,
          &:hover,
          &:focus {
            color: ${ COLORS.PRIMARY };
            text-decoration: none;
          }

          &:hover,
          &:focus {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
      }

      &.separator {
        position: relative;
        height: 25px;
        width: 1px;
        background-color: ${ COLORS.BORDER };
        align-self: center;
        margin: 0 15px;
      }

      &.user-menu {
        position: relative;
        align-self: center;
      }

      > a {
        display: block;
        padding: 24px 10px;
        color: ${ COLORS.TAB_LINK_COLOR };
        text-decoration: none;
        border-bottom: 3px solid transparent;
        white-space: nowrap;

        &:hover,
        &:focus {
          color: ${ darken(COLORS.TAB_LINK_COLOR, 5) };
        }

        &[class*='active'] {
          color: ${ COLORS.TAB_LINK_COLOR };
          border-color: ${ COLORS.TAB_LINK_COLOR };
          font-weight: 600;

          &:hover,
          &:focus {
            color: ${ lighten(COLORS.TAB_LINK_COLOR , 5) };
          }
        }
      }
    }
  }
`;

const AvatarWrapper = styled.div`
  flex-align: center;

  .avatar {
    position: relative;
    display: block;
    color: #fff;

    &:hover,
    &:focus {
      color: ${ darken('#fff', 5) };
    }

    .avatar-image {
      width: 45px;
      height: 45px;
      overflow: hidden;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      margin-right: 20px;

      img {
        min-height: 45px;
        width: 100%;
      }
    }

    span {
      position: absolute;
      top: 50%;
      right: 0;
      margin-top: -7px;
    }
  }
`;

export default withRouter(Header, { withRef: true });
