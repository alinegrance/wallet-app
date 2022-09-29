import React, { Component } from 'react';
import './WalletForm.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletForm extends Component {
  render() {
    const { currencies } = this.props;
    console.log(currencies);

    return (
      <form className="WalletForm">
        <label htmlFor="expenseValue">
          {'Valor: '}
          <input data-testid="value-input" id="expenseValue" type="text" />
        </label>
        <label htmlFor="description">
          {'Descrição: '}
          <input data-testid="description-input" id="description" type="text" />
        </label>
        <label htmlFor="currency">
          <select data-testid="currency-input" id="currency">
            {
              currencies.map((currency) => (
                <option key={ currency }>{currency}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="paymentMethod">
          <select data-testid="method-input" id="paymentMethod">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expenseTag">
          <select data-testid="tag-input" id="expenseTag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);

WalletForm.propTypes = {
  currencies: PropTypes.shape().isRequired,
};
