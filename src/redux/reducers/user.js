// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_USER':
    return {
      ...action.payload,
    };
  default:
    return state;
  }
};

export default userReducer;
