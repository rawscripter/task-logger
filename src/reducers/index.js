import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReducer from "./techReducer";
export default combineReducers({
    // reducers
    log: logReducer,
    tech: techReducer,
});