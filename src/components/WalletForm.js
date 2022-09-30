import React, { Component } from 'react';
import './WalletForm.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExpenseTest } from '../redux/actions';

class WalletForm extends Component {
  state = {
    expenseValue: '',
    description: '',
    currency: 'USD',
    paymentMethod: 'Dinheiro',
    expenseTag: 'Alimentação',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  submitExpense = () => {
    const { saveExpense } = this.props;
    saveExpense({ ...this.state });
    this.setState({
      expenseValue: '',
      description: '',
      currency: 'USD',
      paymentMethod: 'Dinheiro',
      expenseTag: 'Alimentação',
    });
  };

  render() {
    const { currencies } = this.props;
    const { expenseValue, description } = this.state;

    return (
      <form
        className="WalletForm"
        onSubmit={ this.submitExpense }
      >
        <label htmlFor="expenseValue">
          {'Valor: '}
          <input
            data-testid="value-input"
            id="expenseValue"
            name="expenseValue"
            value={ expenseValue }
            type="text"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          {'Descrição: '}
          <input
            data-testid="description-input"
            id="description"
            name="description"
            value={ description }
            type="text"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          {'Moeda: '}
          <select
            data-testid="currency-input"
            id="currency"
            name="currency"
            onChange={ this.handleChange }
          >
            {
              currencies.map((coin) => (
                <option key={ coin } value={ coin }>{coin}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="paymentMethod">
          {'Método: '}
          <select
            data-testid="method-input"
            id="paymentMethod"
            name="paymentMethod"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expenseTag">
          {'Tag: '}
          <select
            data-testid="tag-input"
            id="expenseTag"
            name="expenseTag"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (state) => dispatch(getExpenseTest(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(String).isRequired,
  saveExpense: PropTypes.func.isRequired,
};
