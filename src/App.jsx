import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello");
  }, [count]);

  return (
    <>
      <div>
        <h1>{`count: ${count}`}</h1>
        <div>
          <button type="button" onClick={() => setCount(count + 1)}>
            Click ME
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
