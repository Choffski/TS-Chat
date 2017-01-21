const initialState = {};

const chatroomReducer = (state: Object = initialState, action: {type: string, payload: any}) => {

  switch (action.type) {
  case "NEW_CHATROOM": {
    return { ...state };
  }
  default: return state;
};
};

export default chatroomReducer;
