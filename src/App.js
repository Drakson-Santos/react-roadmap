import React from "react";
import { useState } from "react";
import AdvancedTopics from "./advancedTopics";

function App() {
	const [currentTopic, setCurrentTopic] = useState(<AdvancedTopics />);

	return (
		<div className="App">
			<div>
				<button 
					onClick={() => setCurrentTopic(null)}
				>
					Fundamental Topics
				</button>
				<button
					onClick={() => setCurrentTopic(<AdvancedTopics />)}
				>
					Advanced Topics
				</button>
			</div>
			<div>
				{currentTopic}
			</div>
		</div>
	);
}

export default App;
