import axios from "axios";

const API_URL = "http://localhost:8110/";

const tokenHeader = require("./auth.header")

const create = (title, date_start, date_end) => {
  console.log("Starting creation of the event...")
  return axios.post(API_URL + "events/create", {
    title,
    date_start,
    date_end
  },{
    headers: tokenHeader.setTokenHeader
  })
};



const login = (username, password) => {
  console.log("Logging in...")
  return axios
    .post(API_URL + "users/login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};



const logout = () => {
  console.log("Logging out")
  localStorage.removeItem("user");
  return true
};



export default {
  create
};