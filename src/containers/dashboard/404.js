import React, { Component } from 'react';
import { NonIdealState } from '@blueprintjs/core';

class NotFoundErrorPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container vertical-padding">
        <NonIdealState
          title="Nada por Aqui"
          description="Parece ser que la pagina que buscas no existe."
          visual="error"
        />
      </div>
    );
  }
}

export default NotFoundErrorPage;
