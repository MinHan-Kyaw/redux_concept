const redux = require("redux");

// reducer
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
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
