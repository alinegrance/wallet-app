import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header className="Header">
        <h1>-Trybewallet-</h1>
        <div className="headerInfo">
          <p data-testid="email-field">{email}</p>
          <p>
            {'Despesa total: '}
            <span data-testid="total-field">0</span>
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
