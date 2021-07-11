import loggedReducer from "./loggedReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    loggedIn: loggedReducer
});

export default rootReducer