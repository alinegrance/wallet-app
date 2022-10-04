import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Table.css';
import { deleteExpense, editBtnOn } from '../redux/actions';

class Table extends Component {
  render() {
    const { expenses, deleteEntry, editBtn } = this.props;
    return (
      <table className="Table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{Number(expense.value).toFixed(2)}</td>
                <td>{expense.exchangeRates[expense.currency].name}</td>
                <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
                <td>
                  {(expense.value
                  * expense.exchangeRates[expense.currency].ask).toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => deleteEntry(expense.id) }
                  >
                    Remover
                  </button>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => editBtn(expense.id) }
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteEntry: (expenseId) => dispatch(deleteExpense(expenseId)),
  editBtn: (expenseId) => dispatch(editBtnOn(expenseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = ({
  expenses: PropTypes.arrayOf(Object).isRequired,
  deleteEntry: PropTypes.func.isRequired,
  editBtn: PropTypes.func.isRequired,
});
