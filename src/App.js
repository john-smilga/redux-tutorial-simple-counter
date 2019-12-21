// Provider, connect - react-redux

import React from "react";
import Counter from "./Counter";
import { createStore } from "redux";
import { DECREASE, RESET, INCREASE } from "./actions";
import reducer from "./reducers";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
//setup initial state
const defaultState = {
  count: 0,
  name: "john"
};
// setup reducer

// setup store
const store = createStore(reducer, defaultState, composeWithDevTools());

const App = () => {
  return (
    <Provider store={store}>
      <Counter random="random value" />
    </Provider>
  );
};

export default App;
