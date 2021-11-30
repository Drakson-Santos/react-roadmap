import React, { useRef } from "react";

const UseRefHooks = () => {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus no input</button>
    </>
  );
};

export default UseRefHooks;
