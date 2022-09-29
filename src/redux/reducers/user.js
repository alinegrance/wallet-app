// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_USER } from '../actions';

const INITIAL_STATE = {
  user: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_USER:
    return {
      user: { ...action.payload },
    };
  default:
    return state;
  }
};

export default userReducer;
