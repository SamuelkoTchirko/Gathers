import auth from "./auth";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    isLoggedIn: auth
});

export default rootReducer