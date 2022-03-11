import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  onLoginSubmit() {
    const { history } = this.props;
    history.push('/characters');
  }

  onInputChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={ this.onLoginSubmit }>
        <label>
          Seu e-mail:
          <input
            type="email"
            name="email"
            onChange={ this.onInputChange }
          />
        </label>
        <br />
        <label>
          Sua senha:
          <input
            type="password"
            name="password"
            onChange={ this.onInputChange }
          />
        </label>
        <br />
        <button
          type="submit"
          disabled={ email.length === 0 || password.length === 0 }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
