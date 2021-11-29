import React, { useState } from "react";
import CustomHooks from "./hooks/customHooks";

const AdvancedTopics = () => {
  const [currentTopic, setCurrentTopic] = useState(<CustomHooks />);

  return (
    <div>
      <div>
        <button onClick={() => setCurrentTopic(<CustomHooks />)}>
          Custom Hooks
        </button>
      </div>
      {currentTopic}
    </div>
  );
};

export default AdvancedTopics;
