import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitClicked = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
  };

  return (
    <div>
      <form className="form-cont" onSubmit={submitClicked}>
        <h1 className="form-heading">Controlled Inputs</h1>
        <div className="form-input-comp">
          <label className="form-label" htmlFor="name">
            Name:-
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-input-comp">
          <label className="form-label" htmlFor="email">
            Email:-
          </label>
          <input
            type="text"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="submit-btn-cont">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
