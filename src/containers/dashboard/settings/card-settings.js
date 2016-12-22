import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, EditableText, Slider, Popover, Position, Tooltip } from '@blueprintjs/core';
import { SliderPicker, CirclePicker } from 'react-color';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderValue: 5,
      background: '#fff',
      title: '',
      description: '',
    };

    this.onSliderChange = this.onSliderChange.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onSliderChange(sliderValue) {
    this.setState({ sliderValue });
  }

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  onChangeText(name) {
    return value => {
      this.setState({ [name]: value });
    }
  }

  render() {

    const popoverContent = (
     <div className="color-picker-popover">
       <SliderPicker
         color={ this.state.background }
         onChangeComplete={ this.handleChangeComplete }
       />
       <CirclePicker
         color={ this.state.background }
         onChangeComplete={ this.handleChangeComplete }
       />
       <Button onClick={ this.handleChangeComplete.bind(this, { hex: '#fff' }) } className="pt-fill">Resetear</Button>
     </div>
    );

    return (
      <div className="card-stack card-settings">

        <h1 className="lead">Ajustes de tarjeta</h1>
        <div className="divider-title">
          <div className="line" />
          <div className="line" />
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="pt-card pt-elevation-0 pt-interactive">
                <div className="card-bgbar" style={{ backgroundColor: this.state.background }}></div>
                <div className="card-bg" style={{ backgroundColor: this.state.background }}></div>

                <div className="card-body">
                  <form method="post" className="editable-form">
                    <div className="color-picker">
                      <Tooltip content="Guardar">
                        <Button className="pt-minimal pt-intent-primary" style={ this.state.background !== '#fff' ? { color: this.state.background } : {} }>
                          <span className="pt-icon-floppy-disk" />
                        </Button>
                      </Tooltip>
                      &nbsp;

                      <Popover
                        content={popoverContent}
                        position={Position.BOTTOM_RIGHT}
                      >
                        <Tooltip content="Cambiar color">
                          <Button style={ this.state.background !== '#fff' ? { color: this.state.background } : {} }>
                            <span className="pt-icon-tint" />
                          </Button>
                        </Tooltip>
                      </Popover>
                    </div>

                    <h3 className="card-title">
                      <EditableText
                        placeholder="Nombre de la tarjeta"
                        onChange={ this.onChangeText('title') }
                        value={ this.state.title }
                      />
                    </h3>

                    <div className="control-group">
                      <EditableText
                        multiline
                        minLines={4}
                        maxLines={4}
                        placeholder="Descripcion de la tarjeta"
                        onChange={ this.onChangeText('description') }
                        value={ this.state.description }
                      />
                    </div>

                    <div className="card-footer">
                      <div className="control-group">
                        <label>Numero limite de sellos</label>

                        <Slider
                          min={0}
                          max={20}
                          stepSize={1}
                          labelStepSize={1}
                          onChange={ this.onSliderChange }
                          value={ this.state.sliderValue }
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapState = () => ({});
const mapActions = () => ({});

export default connect(mapState, mapActions)(Dashboard);
