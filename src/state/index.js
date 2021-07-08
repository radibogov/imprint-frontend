import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { languageReducer } from "./reducers/languageReducer";
import { composeWithDevTools } from 'redux-devtools-extension';





const rootReducer = combineReducers({
    language: languageReducer,
})




export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
