import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
  sumExpenses = () => {
    const { expenses } = this.props;
    return expenses
      .reduce((acc, expense) => {
        const exchangeRate = +expense.exchangeRates[expense.currency].ask;
        return (acc + +expense.expenseValue * exchangeRate);
      }, 0).toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <header className="Header">
        <h1>-Trybewallet-</h1>
        <div className="headerInfo">
          <p data-testid="email-field">{email}</p>
          <p>
            {'Despesa total: '}
            <span>
              R$
              <span data-testid="total-field">{this.sumExpenses()}</span>
            </span>
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};
