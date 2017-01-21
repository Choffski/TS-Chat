const initialState = {
  user: {},
  error: {}
};

const usersReducer = (state: Object = initialState, action: {type: string, payload: any}) => {

  switch (action.type) {
  case "LOGIN_PENDING": {
    return { ...state };
  }
  case "LOGIN_FULFILLED": {
      return { ...state, user: action.payload};
  }
  case "LOGIN_REJECTED": {
    return { ...state, error: action.payload};
  }
  default: return state;
};
};

export default usersReducer;
