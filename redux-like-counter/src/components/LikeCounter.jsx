import React, { useState } from "react";
import reducer from "./Reducer";
import { createStore } from "redux";
import { decrement, increment } from "./Actions";

let store = createStore(reducer);
export default function LikeCounter() {
  let [count, setCount] = useState(0);

  store.subscribe(() => {
    setCount(store.getState().count);
  });

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => store.dispatch(increment())}>Like💖</button>
      <button onClick={() => store.dispatch(decrement())}>Unlike💔</button>
    </div>
  );
}
