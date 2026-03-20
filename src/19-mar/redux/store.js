import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { todoReducer, userReducer } from "./reducer";



const rootReducer=combineReducers({
    todo:todoReducer,
    users:userReducer
})
export const store=createStore(rootReducer,applyMiddleware(thunk))



// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { thunk } from "redux-thunk";
// import { todoReducer, userReducer } from "./reducer";

// export const store = createStore(userReducer, applyMiddleware(thunk));



// import { createStore } from "redux";
// import { todoReducer } from "./reducer";

// export const store=createStore(todoReducer)
