import { combineReducers, createStore } from "redux";

let initialState: {} = {
  ipAddress: null,
};

const address = (state = initialState, action: any) => {
  switch (action.type) {
    case "IP_ADDRESS":
      return { ...state, ipAddress: action.payload };

    default:
      break;
  }
};

const Reducer = combineReducers({
  getAddress: address,
});
const store = createStore(Reducer);
