
import { applyMiddleware, combineReducers, legacy_createStore,compose } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./Product/product.reducer";
import { productsReducer } from "./Home/homeReducer"
import { SignUpReducer } from "./Authentication/SignUp/SingUpReducer";
import { LoginReducer } from "./Authentication/Login/LoginReducer";




import { dashboardReducer } from "./Dashboard/Dashboard.reducer";
import { AccountInfoReducer } from "./AccountInfo/AcInfo.reducer";



const rootReducer=combineReducers({
  auth: LoginReducer,
  SignUp: SignUpReducer,
    product:productReducer,
  AllProducts : productsReducer ,
  dashboard:dashboardReducer,
  accountInfo:AccountInfoReducer

});
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

export const store=legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
