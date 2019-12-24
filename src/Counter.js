import React from "react";
import { connect } from "react-redux";
import { DECREASE, RESET, INCREASE, MODAL_OPEN } from "./actions";
import { modalOpen } from "./actions";
function Counter({ name, count, increase, decrease, reset }) {
  return (
    <div className="container">
      <div>
        <h1>counter</h1>
        <h2>{name}</h2>
        <p className="counter">{count}</p>
        <div className="buttons">
          <button type="button" className="btn" onClick={decrease}>
            decrease
          </button>
          <button type="button" className="btn" onClick={reset}>
            reset
          </button>
          <button type="button" className="btn" onClick={increase}>
            increase
          </button>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return { count: state.countState.count, name: state.countState.name };
}
function mapDispatchToProps(dispatch, ownProps) {
  // console.log(ownProps);

  return {
    increase: () => dispatch({ type: INCREASE }),
    decrease: () => dispatch({ type: DECREASE }),
    reset: () => {
      dispatch({ type: RESET });
      dispatch(
        modalOpen(
          "susan",
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sed quis totam saepe mollitia tempore, modi eveniet repellat! Odio, non!"
        )
      );
      // dispatch({
      //   type: MODAL_OPEN,
      //   payload: { name: "bob", text: "hello there user" }
      // });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
