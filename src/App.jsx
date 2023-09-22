import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const url = "https://api.github.com/users/QuincyLarson";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setIsLoading(false);
    try {
      const response = await axios.get(url);
      const resData = await response.data;
      // console.log(resData);
      if (response.status == 404) {
        setError(true);
      }
      setError(false);
      setData(...data, resData);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const ShowUser = ({ name, bio, company }) => {
    console.log(data);
    return (
      <div>
        <h1>{data.name}</h1>
        <h2>{data.bio}</h2>
        <p>{data.company}</p>
      </div>
    );
  };

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <>
        {(error && <h1>user Not Found</h1>) || (
          <ShowUser data={data} key={data.id} />
        )}
      </>
    </div>
  );
}

export default App;
