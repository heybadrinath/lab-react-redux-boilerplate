// Reducer.js
const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
        console.log("1")
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
        console.log('2')
      return { ...state, count: state.count - 1 };
    default:
        console.log('3')
      return state;
  }
};

export default reducer;
