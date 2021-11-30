import React, { useState } from "react";
import CommonHooks from "./hooks/commonHooks";
import CustomHooks from "./hooks/customHooks";

const AdvancedTopics = () => {
  const [currentTopic, setCurrentTopic] = useState(<CustomHooks />);

  return (
    <div>
      <div>
        <button onClick={() => setCurrentTopic(<CustomHooks />)}>
          Custom Hooks
        </button>
        <button onClick={() => setCurrentTopic(<CommonHooks />)}>
          Commom Hooks
        </button>
      </div>
      {currentTopic}
    </div>
  );
};

export default AdvancedTopics;
