import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://course-api.com/",
  headers: {
    Accept: "Application/json",
  },
});

export default authFetch;
