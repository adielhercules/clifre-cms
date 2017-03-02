import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Intent } from "@blueprintjs/core";

import LocaleMessages from '../../utils/locale';
import login from '../../containers/account/actions/create-account';

class Signin extends Component {
  state = {
    canSubmit: false,
  }

  submit = () => {
    const { signin, login: loginAction } = this.props;

    loginAction(signin.values);
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
      <SigninWrapper>
        <span dangerouslySetInnerHTML={ { __html: Locale.signin } } />

        <form onSubmit={ this.submit }>

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

          <Button
              intent={ Intent.PRIMARY }
              onClick={ this.submit }
              disabled={ pristine || submitting || errors.length }
              text="Entrar"
          />
        </form>
      </SigninWrapper>
    );
  }
}

Signin.propTypes = {
  Locale: PropTypes.object,
  signin: PropTypes.object,
};

const SigninWrapper = styled.div`
  position: relative;
`;

const mapState = ({ locale, form: { signin } }) => ({
  Locale: LocaleMessages(locale),
  signin: signin || {},
});

const mapActions = {
  login,
};

export default connect(mapState, mapActions)(reduxForm({
  form: 'signin'
})(Signin));
