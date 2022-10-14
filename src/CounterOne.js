import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        firstCounter: state.firstCounter + action.value
      };
    case "decrement":
      return {
        firstCounter: state.firstCounter - action.value
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CounterOne = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stateTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {state.firstCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <hr />
      <div>Count - {stateTwo.firstCounter}</div>
      <button onClick={() => dispatchTwo({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatchTwo({ type: "decrement", value: 5 })}>
        decrement 5
      </button>
      <button onClick={() => dispatchTwo({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterOne;
