import React, { Component } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './header.component.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
    };

    this.searchQueryChange = this.searchQueryChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  searchQueryChange(event, target) {
    //To-do
  }

  onChange(event, target, stateKeyName) {
    this.setState({ [stateKeyName]: event.target.value });
    this.searchQueryChange(event, target);
  }

  render() {
    return (
      <div styleName="header">
        <div styleName="left">
          <Link to="/dashboard" styleName="logotype">CLIFRE</Link>

          <form method="POST">
            <div styleName="search-input-wrapper">
              <i className="ion-ios-search-strong"></i>
              <input
                type="text"
                id="query"
                name="query"
                styleName={ this.state.searchQuery.trim().length ? 'notempty' : '' }
                value={ this.state.searchQuery }
                onChange={ (event) => { this.onChange(event, this, 'searchQuery') } } />
              <label htmlFor="query">buscar&hellip;</label>

              <input type="submit" />
            </div>
          </form>
        </div>

        <div styleName="right">
          <div styleName="tabs">
            hi
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(Header, styles);
