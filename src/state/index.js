import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { languageReducer } from "./reducers/languageReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { chatReducer } from "./reducers/chatOpenReducer";
import { chatStateReducer } from "./reducers/chatStateReducer";
import { authReducer } from "./reducers/tokensReducer";





const rootReducer = combineReducers({
    language: languageReducer,
    openChat: chatReducer,
    chatState: chatStateReducer,
    auth: authReducer,
})




export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
