import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import showJsx from "./assets/Show";
const url = "https://course-api.com/react-store-products";

function App() {
  const [userData, setData] = useState([]);

  const fetchData = async () => {
    try {
      const responseData = await axios.get(url);
      const data = responseData.data;
      setData(data);
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
      {userData.map((eachData) => {
        return showJsx(eachData);
      })}
    </>
  );
}

export default App;
