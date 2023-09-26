import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const url = "https://api.github.com/users/QuincyLarson";

function App() {
  const [toggle, isToggle] = useState(false);

  const ShowComponent = () => {
    useEffect(() => {
      const intervalId = setInterval(() => {
        console.log("Hello");
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }, []);
    return <div>Hello There</div>;
  };

  return (
    <div>
      <button type="button" onClick={() => isToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <ShowComponent />}
    </div>
  );
}

export default App;
