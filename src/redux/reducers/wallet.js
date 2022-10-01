// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { DELETE_EXPENSE, GET_RESPONSE, SAVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  error: '',
  expenses: [],
  nextId: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  // localStorage.setItem(action.type, JSON.stringify(action));
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
  default:
    // console.log(state);
    return { ...state };
  }
};

export default walletReducer;
