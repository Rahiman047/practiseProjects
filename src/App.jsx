import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const url = "https://api.github.com/users/QuincyLarson";

function App() {
  const [toggle, isToggle] = useState(false);

  const ShowComponent = () => {
    useEffect(() => {
      console.log("Toggled");
    }, []);
    return <h1>Hello Lol</h1>;
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
