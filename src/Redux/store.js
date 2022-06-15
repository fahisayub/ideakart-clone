
import {legacy_createStore,
    applyMiddleware,
    compose,
    combineReducers
} from "redux" 
import { productsReducer } from "./Home/homeReducer"

import thunk from "redux-thunk"

const rootReducer = combineReducers({
    AllProducts : productsReducer 
}) 

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
