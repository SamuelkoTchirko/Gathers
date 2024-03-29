const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };


const auth = (state = false, action) => {
    const { type, payload } = action;

    switch(type){

    case "REGISTER_SUCCESS":
      return {
        ...state,
        isLoggedIn: false,
      };
    case "REGISTER_FAIL":
      return {
        ...state,
        isLoggedIn: false,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
    }
}

export default auth