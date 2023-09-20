import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ShowJsx from "./assets/Show";
const url = "https://course-api.com/axios-tutorial-post";

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const serverResponse = await axios.post(url, {
        name: name,
        email: email,
      });
      console.log(serverResponse);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      {/* <h1>Hello</h1>
      <ShowJsx userData={userData} /> */}
      <form type="submit" className="form-el" onSubmit={handleSubmit}>
        <div className="form-sec">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-sec">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="sub-button">submit</button>
      </form>
    </>
  );
}

export default App;
