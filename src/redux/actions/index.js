// Coloque aqui suas actions
export const SAVE_USER = 'SAVE_USER';

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

/// //////////////////////////////////////

export const REQUEST_API = 'REQUEST_API';
export const GET_RESPONSE = 'GET_RESPONSE';
export const GET_ERROR = 'GET_ERROR';

export const requestAPI = () => ({
  type: REQUEST_API,
});

export const getResponse = (response) => ({
  type: GET_RESPONSE,
  payload: Object.keys(response).filter((item) => item !== 'USDT'),
});

export const getError = (error) => ({
  type: GET_ERROR,
  payload: error,
});

export const fetchAPI = () => async (dispatch) => {
  try {
    dispatch(requestAPI());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(getResponse(data));
  } catch (error) {
    dispatch(getError(error));
  }
};

/// ////////////////////////////////////////////////

export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const getExpense = (payload) => ({
  type: SAVE_EXPENSE,
  payload,
});

/// ///////////////////////////////////////////////////////////////////////////////////

export const expensesWithExchangeTest = (data, state) => ({
  type: SAVE_EXPENSE,
  payload: { ...state, exchangeRates: data },
});

export const getExpenseTest = (state) => async (dispatch) => {
  try {
    dispatch(requestAPI());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(expensesWithExchangeTest(data, state));
  } catch (e) {
    dispatch(getError(e));
  }
};
