import React, { useContext } from "react";
import { Context } from "./context.js";

const Counter = () => {
  const { count, setCount } = useContext(Context);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <>
      <h2>Count: {count} </h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
