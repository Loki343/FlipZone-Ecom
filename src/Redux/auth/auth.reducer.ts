import { AuthAction } from "./auth.action";
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./auth.types";

export interface AuthState {
  loading: boolean;
  error: boolean;
  isAuth: boolean;
  token: string;
}

const initialState = {
  loading: false,
  error: false,
  isAuth: false,
  token: "",
};

export const AuthReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        isAuth: true,
        token: action.payload,
      };
    }

    case USER_LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default:
      return state;
  }
};
