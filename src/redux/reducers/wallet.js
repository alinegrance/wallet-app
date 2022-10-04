// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { DELETE_EXPENSE,
  EDIT_BTN_ON,
  EDIT_EXPENSE,
  GET_RESPONSE,
  SAVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  error: '',
  expenses: [],
  nextId: 0,
  editor: false,
  idToEdit: 0,
};

const updateExpenses = (expenses, expenseId, newExpense) => {
  const oldExpense = expenses.find((exp) => exp.id === expenseId);
  const oldExpenseIdx = expenses.findIndex((exp) => exp.id === expenseId);
  newExpense.id = expenseId;
  newExpense.exchangeRates = oldExpense.exchangeRates;
  const newExpenses = [...expenses];
  newExpenses[oldExpenseIdx] = newExpense;
  return newExpenses;
};

const walletReducer = (state = INITIAL_STATE, action) => {
  // localStorage.setItem(action.type, JSON.stringify(action));
  console.log(action.payload);
  switch (action.type) {
  case GET_RESPONSE:
    return {
      ...state,
      currencies: [...action.payload],
    };
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload, id: state.nextId }],
      nextId: state.nextId + 1,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };
  case EDIT_BTN_ON:
    return {
      ...state,
      editor: action.payload.editor,
      idToEdit: action.payload.idToEdit,
    };
  case EDIT_EXPENSE:

    return {
      ...state,
      expenses: updateExpenses(state.expenses, state.idToEdit, action.payload),
      editor: false,
    };

  default:
    return { ...state };
  }
};

export default walletReducer;
