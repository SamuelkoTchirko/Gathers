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

const create = (title, date_start, date_end, public_event) => {
  console.log("Starting creation of the event...")

  return axios.post(API_URL + "events/create", {
    title,
    date_start,
    date_end, 
    public_event
  },{
    headers: setTokenHeader()
  })
};

const deleteEvent = (id) => {
  console.log("Deleting event...")

  return axios.delete(API_URL + "events/" + id, {
    headers: setTokenHeader()
  })
};

const getMyEvents = () => {
  console.log("Getting events of the current user...")

  return axios.get(API_URL + "events", {
    headers: setTokenHeader()
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
  create,
  deleteEvent,
  getMyEvents
};