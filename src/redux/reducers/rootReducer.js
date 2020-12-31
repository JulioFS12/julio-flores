import { combineReducers } from "redux";

const { uiReducer } = require("./uiReducer");

export const rootReducer = combineReducers({
    ui: uiReducer,
})