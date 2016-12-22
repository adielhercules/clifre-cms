import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router';
import CSSModules from 'react-css-modules';
import { Popover, Position, Menu, MenuItem, MenuDivider, Button } from '@blueprintjs/core';

import styles from './header.component.scss';

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
      <div styleName="header">
        <div className="container">
          <div styleName="left">
            <Link to="/dashboard" styleName="logotype">CLIFRE</Link>

            <form method="POST">
              <div styleName="search-input-wrapper">
                <span className="pt-icon pt-icon-search" />
                <input
                  type="text"
                  id="query"
                  name="query"
                  styleName={this.state.searchQuery.trim().length ? 'notempty' : ''}
                  value={this.state.searchQuery}
                  onChange={(event) => { this.onChange(event, this, 'searchQuery'); }} />
                <label htmlFor="query">buscar&hellip;</label>

                <input type="submit" />
              </div>
            </form>
          </div>

          <div styleName="right">
            <div styleName="tabs">
              <ul>
                <li styleName="menu-item">
                  <Link
                    activeClassName={'active'}
                    to="/dashboard"
                    onlyActiveOnIndex>RESUMEN</Link>
                </li>
                <li styleName="menu-item">
                  <Link
                    activeClassName={'active'}
                    to="/dashboard/settings/card"
                    onlyActiveOnIndex>AJUSTES DE TARJETA</Link>
                </li>

                <li styleName="mobile-menu">
                  <Popover content={mobileMenuContent} position={Position.BOTTOM}>
                    <Button iconName="more" text="Menu" />
                  </Popover>
                </li>

                <li styleName="add-item">
                  <Popover content={popoverAddItemContent}
                           position={Position.BOTTOM}>
                    <Link to="javascript:;" onClick={ e => e.preventDefault() }>
                      <span className="pt-icon-plus" />
                    </Link>
                  </Popover>
                </li>

                <li styleName="separator" />

                <li styleName="user-menu">
                  <Popover content={popoverContent}
                           position={Position.BOTTOM_RIGHT}>
                    <div styleName="avatar-wrapper">
                      <Link styleName="avatar" to="javascript:;" onClick={ e => e.preventDefault() }>
                        <div styleName="avatar-image">
                          <img src={require('./johndoe.jpg')} alt=""/>
                        </div>

                        <span className="pt-icon pt-icon-chevron-down" />
                      </Link>
                    </div>
                  </Popover>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  router: PropTypes.object
};

export default withRouter(CSSModules(Header, styles), { withRef: true });
