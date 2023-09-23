import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const url = "https://api.github.com/users/QuincyLarson";

function App() {
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState(null);

  const submitUser = () => {
    setUser("");
    if (user === "") {
      setUserName("");
    }
    setUserName(user);
  };

  return (
    <div className="card-el">
      <div>
        <label htmlFor="user">Name</label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={submitUser}>
          {userName ? "Logout" : "Login"}
        </button>
        {userName && <p>{`userName is ${userName}`}</p>}
        {!userName && <p>Please Give user Name</p>}
      </div>
    </div>
  );
}

export default App;
