// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_RESPONSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  error: '',
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_RESPONSE:
    return {
      ...state,
      currencies: [...action.payload],
    };
  default:
    return state;
  }
};

export default walletReducer;
