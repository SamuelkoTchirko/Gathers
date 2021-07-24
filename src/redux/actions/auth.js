import AuthService from "../../services/auth.service";

  
export const register = (username, password, dispatch) => {

    return AuthService.register(username, password).then(
      (response) => {
        dispatch({
          type: "REGISTER_SUCCESS",
        });
  
        return Promise.resolve();
      },
      (error) => {
        console.log(error.toString()+" error nastal v actions/auth");
  
        dispatch({
          type: "REGISTER_FAIL",
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
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
    );
  };
  
  export const logout = () => (dispatch) => {
    AuthService.logout();
  
    dispatch({
      type: "LOGOUT",
    });
  };