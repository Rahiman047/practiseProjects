import { useState, useEffect } from "react";
import axios from "./Axios.jsx";
import "./App.css";
import ShowJsx from "./assets/Show";
const url = "https://course-api.com/react-store-products";

function App() {
  const getData = async () => {
    try {
      const getRes = await axios.get(url);
      console.log(getRes);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Axios</h1>
      {/* <h1>Hello</h1>
      <ShowJsx userData={userData} /> */}
      {/* <form type="submit" className="form-el" onSubmit={handleSubmit}>
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
      </form> */}
    </>
  );
}

export default App;
