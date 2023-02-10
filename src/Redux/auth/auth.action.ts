import { LoginData } from "../../Utiles/types";
import { AppDispatch } from "../store";
import { userLoginAPI } from "./auth.api";
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./auth.types";

//define types
export interface IUserLoginRequest {
  type: typeof USER_LOGIN_REQUEST;
}

export interface IUserLoginSuccess {
  type: typeof USER_LOGIN_SUCCESS;
  payload: string;
}

export interface IUserLoginError {
  type: typeof USER_LOGIN_ERROR;
}

export type AuthAction =
  | IUserLoginRequest
  | IUserLoginSuccess
  | IUserLoginError;

//main action
export const userLoginRequest = (): IUserLoginRequest => ({
  type: USER_LOGIN_REQUEST,
});

export const userLoginSuccess = (token: string): IUserLoginSuccess => ({
  type: USER_LOGIN_SUCCESS,
  payload: token,
});

export const userLoginError = (): IUserLoginError => ({
  type: USER_LOGIN_ERROR,
});

export const userLogin =
  (payload: LoginData):any => async (dispatch: AppDispatch) => {
    dispatch(userLoginRequest());
    try {
      let data = await userLoginAPI(payload);
      if (data) {
        dispatch(userLoginSuccess(data));
      }
    } catch (error) {
      dispatch(userLoginError());
    }
  };
