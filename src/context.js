import React, { createContext, useState, useMemo } from "react";

export const Context = createContext(null);

export const CountContext = ({ children }) => {
  const [count, setCount] = useState(0);
  const countContext = useMemo(
    () => ({
      count,
      setCount
    }),
    [count, setCount]
  );
  return <Context.Provider value={countContext}>{children}</Context.Provider>;
};
