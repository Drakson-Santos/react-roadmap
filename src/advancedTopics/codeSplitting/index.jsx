import React, { useEffect, useState } from "react";

const CodeSplitting = () => {
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(true);

  const toggleTheme = () => {
    setDarkThemeEnabled(!darkThemeEnabled);
  };

  useEffect(() => {
    alert("aqui");
    return () => {
      if (darkThemeEnabled) {
        import("./assets/dark.css")
      } else {
        import("./assets/light.css")
      }
    };
  }, [darkThemeEnabled]);

  return (
    <div>
      <div>
        <h1 className="theme">Code Splitting</h1>
      </div>
      <div>
        <button onClick={() => toggleTheme}>Change theme</button>
      </div>
    </div>
  );
};

export default CodeSplitting;
