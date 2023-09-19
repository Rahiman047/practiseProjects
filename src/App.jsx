import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
const url = "https://course-api.com/react-store-products";

function App() {
  const [userData, setData] = useState([]);

  const fetchData = async () => {
    try {
      const responseData = await axios.get(url);
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

  const showJsx = (eachData) => {
    console.log(eachData);
    const { id, company, description, name } = eachData;
    return (
      <>
        <h1>{company}</h1>
        <p>{company}</p>
        <p>{description}</p>
        <p>{name}</p>
      </>
    );
  };

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
