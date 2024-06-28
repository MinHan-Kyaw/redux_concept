const redux = require("redux");

// reducer
const counterReducer = (state = { counter: 0 }, action) => {
  if (action === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
};

//store
const store = redux.createStore(counterReducer);

//subscription
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
store.subscribe(counterSubscriber);

//dispatching action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
