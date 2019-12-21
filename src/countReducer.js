import { DECREASE, RESET, INCREASE } from "./actions";
const defaultState = {
  count: 0,
  name: "john"
};
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}
