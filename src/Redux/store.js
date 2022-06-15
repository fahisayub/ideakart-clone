import { applyMiddleware, combineReducers, legacy_createStore,compose } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./Product/product.reducer";


const rootReducer=combineReducers({
    product:productReducer,
});
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

export const store=legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));