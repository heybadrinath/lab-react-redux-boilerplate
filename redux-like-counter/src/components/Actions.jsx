const incrementCount = "INCREMENT";

const decrementCount = "DECREMENT";

export const increment = () => {
  return {
    type: incrementCount,
  };
};

export const decrement = () => {
  return {
    type: decrementCount,
  };
};
