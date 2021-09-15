
const setTokenHeader = () =>{
  const user = JSON.parse(localStorage.getItem("user"));
  
  console.log(user)
  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}

export default {
  setTokenHeader
};




