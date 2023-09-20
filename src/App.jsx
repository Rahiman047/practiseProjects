import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ShowJsx from "./assets/Show";
const url = "https://icanhazdadjoke.com/";

function App() {
  const [userData, setData] = useState([]);

  const fetchData = async () => {
    try {
      const responseData = await axios.get(url, {
        headers: { Accept: "application/json" },
      });
      const data = responseData.data;
      setData(data);
      // console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <h1>Hello</h1> */}
      <ShowJsx userData={userData} />
    </>
  );
}

export default App;
