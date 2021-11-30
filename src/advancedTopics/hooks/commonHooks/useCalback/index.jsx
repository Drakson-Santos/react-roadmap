import React, { useCallback, useState } from "react";

const UseCallbackHooks = () => {
  const [a, setA] = useState(0);

  const memoizedCallback = useCallback(() => {
    return (<h1>Mudou{a}</h1>)
  }, [a]);

  return (
    <div>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        A
      </button>
      {memoizedCallback()}
    </div>
  );
};

export default UseCallbackHooks;
