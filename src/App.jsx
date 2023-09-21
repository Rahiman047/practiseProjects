import { useState, useEffect } from "react";
import axios from "./Axios.jsx";
import "./App.css";
import ShowJsx from "./assets/Show";
import authFetch from "./AuthFetch.jsx";
const url = "https://course-api.com/react-store-products";

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const getRes = await authFetch.get("react-store-products");
      const resData = await getRes.data;
      setData(resData);
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
      <div>
        {data.map((eachData) => {
          return (
            <div key={eachData.id}>
              <h1>{eachData.company}</h1>
              <p>{eachData.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
