import React from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveUser } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { history, saveLogin } = this.props;
    saveLogin({ ...this.state });
    history.push('/carteira');
  };

  isValid = () => {
    const PASSWORD_MIN_SIZE = 6;
    const { email, password } = this.state;
    const vEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isEmailValid = email.match(vEmail) != null;
    const isPasswordValid = password.length >= PASSWORD_MIN_SIZE;
    return isEmailValid && isPasswordValid;
  };

  render() {
    const { email, password } = this.state;
    return (
      <section className="Login">
        <h1>-Trybewallet-</h1>
        <h2>Login</h2>
        <div className="loginBox">
          <label htmlFor="email">
            <input
              data-testid="email-input"
              id="email"
              type="email"
              value={ email }
              name="email"
              placeholder="email"
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <label htmlFor="password">
            <input
              data-testid="password-input"
              id="password"
              type="password"
              value={ password }
              name="password"
              placeholder="senha"
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <br />
        <button
          type="button"
          disabled={ !this.isValid() }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveLogin: (state) => dispatch(saveUser(state)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  saveLogin: PropTypes.func.isRequired,
};
