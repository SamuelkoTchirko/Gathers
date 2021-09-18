import axios from "axios";

const API_URL = "http://localhost:8110/";

const tokenHeader = require("./auth.header")

function setTokenHeader(){
  const user = JSON.parse(localStorage.getItem("user"));
  
  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}

const findByUsername = (query) => {
  console.log("Finding users...")

  return axios.get(API_URL + "people/find/" + query, {
    headers: setTokenHeader()
  })
};

export default {
  findByUsername
};