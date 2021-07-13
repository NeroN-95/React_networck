import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./message-reducer";
import sideBarReducer from "./sidebar-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./auth-reducer";






let reducers = combineReducers({
    profilePage:  profileReducer,
    messagesPage:  dialogsReducer,
    sidebar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;