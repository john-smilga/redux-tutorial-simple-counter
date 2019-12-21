// Provider, connect - react-redux

import React from "react";
import Counter from "./Counter";
import { createStore, combineReducers } from "redux";
import { DECREASE, RESET, INCREASE } from "./actions";
import countReducer from "./countReducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

// setup store
const store = createStore(
  combineReducers({
    countState: countReducer
  }),
  composeWithDevTools()
);

const App = () => {
  return (
    <Provider store={store}>
      <Counter random="random value" />
    </Provider>
  );
};

export default App;
