import { createStore, combineReducers, applyMiddleware } from "redux";
import { contactReducer } from "./contactReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
  contacts: contactReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));