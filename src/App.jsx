import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>{(isLoading && <h1>Loading...</h1>) || <h1>Loading Done</h1>}</div>
  );
}

export default App;
