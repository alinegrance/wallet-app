// Coloque aqui suas actions
export const SAVE_USER = 'SAVE_USER';

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

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
    const reponse = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await reponse.json();
    dispatch(getResponse(data));
  } catch (error) {
    dispatch(getError(error));
  }
};
