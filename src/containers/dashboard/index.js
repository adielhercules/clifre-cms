import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@blueprintjs/core';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };

    this.onPressRow = this.onPressRow.bind(this);
  }

  onPressRow() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <div className="card-stack">

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 equal-height-column">
            <div className="box">
              <div className="pt-card pt-elevation-0 pt-interactive">
                <h5>Asignar sellos</h5>

                <div className="card-body">
                  <table className="pt-table pt-interactive dashboard-table">
                    <thead>
                      <tr>
                        <th>
                          <div className="pt-input-group">
                            <span className="pt-icon pt-icon-filter" />
                            <input type="text" className="pt-input pt-fill" placeholder="Buscar..." />
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>
                        <label className="pt-control pt-checkbox">
                          <input type="checkbox" checked={this.state.checked} onChange={this.onPressRow} />
                          <span className="pt-control-indicator" />
                          Manuel Lisandro Lopez
                        </label>
                      </td>
                    </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>
                          <div className="pt-button-group">
                            <Button iconName="plus" text="Asignar" />
                            <Button iconName="caret-down" />
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 equal-height-column">
            <div className="box">
              <div className="pt-card pt-elevation-0 pt-interactive">
                <h5>Canjear tarjeta</h5>
                <p>Overview of employee activity, including risk model, scores and scenario alert history.</p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 equal-height-column">
            <div className="box">
              <div className="pt-card pt-elevation-0 pt-interactive">
                <h5>Ultimos sellos asignados</h5>
                <p>Overview of employee activity, including risk model, scores and scenario alert history.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-title">
          <div className="line" />
          <div className="text">Clientes</div>
          <div className="line" />
        </div>

      </div>
    );
  }
}

const mapState = () => ({});
const mapActions = () => ({});

export default connect(mapState, mapActions)(Dashboard);
