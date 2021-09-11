import axios from "axios";

const API_URL = "http://localhost:8110/";

const register = (username, email, password) => {
  console.log("Posting to the database...")
  return axios.post(API_URL + "users/register", {
    username,
    email,
    password,
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
  register,
  login,
  logout,
};