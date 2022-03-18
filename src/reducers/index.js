import userReducer from "./userReducer";
import { combineReducers } from "redux";
import articleReducer from "./articleReducer";



const rootReducer = combineReducers({
    userState: userReducer,  
    articleState: articleReducer,
});

export default rootReducer;