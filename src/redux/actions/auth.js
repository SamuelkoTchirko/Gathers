import AuthService from "../../services/auth.service";

  
export const register = (username, password) => {
  return new Promise ((resolve, reject) => {
    AuthService.register(username, password).then(() => {
      resolve(true)
    }).catch((err) => {
      reject(false)
    })
  })
};
  
export const login = (username, password) => {
  return new Promise ((resolve, reject) => {
    AuthService.login(username, password).then((response) => {
      console.log(response)
      resolve(response)
    }).catch((err) => {
      reject(null)
    })
  })
/*  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: "LOGIN_SUCCESS",
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: "LOGIN_FAIL",
        });
  
        return Promise.reject();
    }
  );*/
};
  
export const logout = () => (dispatch) => {
  AuthService.logout();
  
  dispatch({
    type: "LOGOUT",
  });
};