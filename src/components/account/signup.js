import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Intent } from "@blueprintjs/core";

import LocaleMessages from '../../utils/locale';
import createAccount from '../../containers/account/actions/create-account';

class Signup extends Component {
  state = {
    canSubmit: false,
    avatar: null,
  }

  submit = () => {
    const { signup, createAccount: createAccountAction } = this.props;

    createAccountAction(signup.values).then(() => {
      alert('Cuenta creada');
    });
  }

  enableButton = () => {
    this.setState({
      canSubmit: true
    });
  }

  disableButton = () => {
    this.setState({
      canSubmit: false
    });
  }

  getAvatarData = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        avatar: reader.result
      });

      this.props.dispatch({
        type: '@@redux-form/CHANGE',
        meta: {
            form: 'signup',
            field: 'avatar',
            touch: false,
            persistentSubmitErrors: false,
        },
        payload: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  removeAvatar = () => {
    this.setState({ avatar: null });

    this.props.dispatch({
        type: '@@redux-form/CHANGE',
        meta: {
            form: 'signup',
            field: 'avatar',
            touch: true,
            persistentSubmitErrors: false,
        },
        payload: '',
    });
  }

  renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <label className="pt-label">
      { label }
      <div className="pt-input-group">
        { type === 'date' && (<span className="pt-icon pt-icon-calendar"></span>) }
        <input className="pt-input" {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </label>
  )

  renderUploadField = () => (
    <AvatarContainer>
      {
        !this.state.avatar && (
          <div className="file-input">
            <label className="pt-file-upload">
              <input
                className="pt-input"
                type="file"
                onChange={e => {
                  this.getAvatarData(e);
                }}
              />
              <span className="pt-file-upload-input">Select a file...</span>
            </label>
          </div>
        )
      }
      {
        this.state.avatar && (
          <div className="file-preview">
            <div className="avatar">
              <img src={this.state.avatar} alt=""/>
            </div>
            <Button onClick={this.removeAvatar}>Seleccionar otra</Button>
            <div className="clearfix"></div>
          </div>
        )
      }
    </AvatarContainer>
  )

  render() {
    const { pristine, submitting, Locale, signup } = this.props;
    const errors = signup ? Object.keys(signup.syncErrors || {}) : [];

    const validations = {
      required: value => value ? undefined : 'Required',
      maxLength: max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined,
      number: value => value && isNaN(Number(value)) ? 'Must be a number' : undefined,
      minValue: min => value => value && value < min ? `Must be at least ${min}` : undefined,
      email: value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined,
      tooOld: value => value && value > 65 ? 'You might be too old for this' : undefined,
      aol: value => value && /.+@aol\.com/.test(value) ? 'Really? You still use AOL for your email?' : undefined,
    };

    return (
      <SignupWrapper>
        <span dangerouslySetInnerHTML={ { __html: Locale.signup } } />

        <form onSubmit={ this.submit }>

          <Field
            name="name"
            label="Nombre"
            component={ this.renderField }
            type="text"
            validate={ validations.required }
          />

          <Field
            name="email"
            label="Correo"
            component={ this.renderField }
            type="text"
            validate={ [validations.required, validations.email] }
            warn={ validations.aol }
          />

          <Field
            name="password"
            label="Clave"
            component={ this.renderField }
            type="password"
            validate={ [validations.required] }
          />

          <Field
            name="birthdate"
            label="Fecha de nacimiento"
            component={ this.renderField }
            type="date"
            validate={ [validations.required] }
          />

          { this.renderUploadField() }

          <Field
            name="avatar"
            component={ this.renderField }
            type="hidden"
            validate={ [validations.required] }
          />

          <Button
              intent={ Intent.PRIMARY }
              onClick={ this.submit }
              disabled={ pristine || submitting || errors.length }
              text="Crear"
          />
        </form>
      </SignupWrapper>
    );
  }
}

Signup.propTypes = {
  Locale: PropTypes.object,
  signup: PropTypes.object,
  createAccount: PropTypes.func,
};

const SignupWrapper = styled.div`
  position: relative;
`;

const mapState = ({ locale, form: { signup } }) => ({
  Locale: LocaleMessages(locale),
  signup: signup || {},
});

const mapActions = {
  createAccount,
};

export default connect(mapState, mapActions)(reduxForm({
  form: 'signup'
})(Signup));

const AvatarContainer = styled.div`
  position: relative;
  margin-bottom: 20px;

  .clearfix {
    clear: both;
  }

  .file-preview {
    .avatar {
      float: left;
      margin-right: 10px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;

      img {
        min-width: 100%;
        min-height: 100%;
        max-width: 120%;
      }
    }
  }
`;
