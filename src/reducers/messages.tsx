const initialState = {};

const messagesReducer = (state: Object = initialState, action: {type: string, payload: any}) => {

  switch (action.type) {
  case "NEW_MESSAGE": {
    return { ...state };
  }
  default: return state;
};
};

export default messagesReducer;
