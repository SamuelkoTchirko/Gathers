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

const createRequest = (id) => {
  console.log("Sending request...")

  return axios.post(API_URL + "friend/add", {
    id
  }, {
    headers: setTokenHeader()
  })
};

const getRequests = () => {
  console.log("Getting requests...")

  return axios.get(API_URL + "friends/requests", {
    headers: setTokenHeader()
  })
}

export default {
  createRequest,
  getRequests
};