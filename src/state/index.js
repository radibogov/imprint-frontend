import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { languageReducer } from "./reducers/languageReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { chatReducer } from "./reducers/chatReducer";





const rootReducer = combineReducers({
    language: languageReducer,
    chat: chatReducer,
})




export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
