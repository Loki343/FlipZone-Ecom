import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AppReducer } from "./app/app.reducer";
import { AuthReducer } from "./auth/auth.reducer";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const rootReducer = combineReducers({
  AppReducer,
  AuthReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch; //this mean we get the type of store.dispatch and we use it

//this is for suggation that what is in the store
export type RootState = ReturnType<typeof store.getState>;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
