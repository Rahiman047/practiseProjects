import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import ShowUser from "./ShowUser";

const url = "https://api.github.com/users/QuincyLarson";

const data = [
  { id: 1, name: "Rahiman", nickName: "Rah" },
  { id: 2, name: "Abdur" },
  {
    id: 3,
    contact: {
      email: "johndoe@example.com",
      phone: "123-456-7890",
      twitter: "https://twitter.com/johndoe",
    },
  },
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <div>
        {data.map((eachItem) => (
          <ShowUser key={eachItem.id} {...eachItem} />
        ))}
      </div>
    </div>
  );
}

export default App;
