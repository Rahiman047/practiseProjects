import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const url = "https://api.github.com/users/QuincyLarson";

function App() {
  const [btnClicked, setBtnClicked] = useState(false);

  const toggleBtnClicked = () => {
    setBtnClicked(!btnClicked);
  };

  return (
    <div className="card-el">
      <div className="click-btn">
        <button type="button" onClick={toggleBtnClicked}>
          {btnClicked ? "UnClickMe" : "Click Me"}
        </button>
      </div>
      {btnClicked ? <p>"U unclicked the Btn"</p> : <p>"U Cliked the Btn"</p>}
    </div>
  );
}

export default App;
