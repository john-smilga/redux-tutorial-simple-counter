// Provider, connect - react-redux

import React from "react";
import Counter from "./Counter";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Modal from "./Modal";
import Products from "./Products";

import countReducer from "./countReducer";
import modalReducer from "./modalReducer";
import productReducer from "./productReducer";
import { getProducts } from "./actions";
const middleware = [thunk];
// setup store
const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);
// store.dispatch(getProducts());
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Modal />
      <Products />
    </Provider>
  );
};

export default App;
