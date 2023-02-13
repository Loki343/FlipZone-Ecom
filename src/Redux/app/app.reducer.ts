import { Product } from "../../Utiles/types";
import { AppAction } from "./app.action";
import {
  ADD_TO_CART_SUCCESS,
  GET_FROM_CART_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PRODUCT_ERROR,
  PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "./app.types";

export interface IAppState {
  loading: boolean;
  error: boolean;
  data: Product[];
  cartData:any,
  getCartData:any
}

const initialState = {
  loading: false,
  error: false,
  data: [],
  cartData:[],
  getCartData:[]
};

export const AppReducer = (
  state: IAppState = initialState,
  action: AppAction
): IAppState => {
  switch (action.type) {
    case PRODUCT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }

    case GET_FROM_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        getCartData: action.payload,
      };
    }

    case UPDATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: state.data.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    }

    case ADD_TO_CART_SUCCESS:{
      return{
        ...state,
        loading:false,
        cartData:[...state.cartData,action.payload]
      }
    }

    case PRODUCT_ERROR: {
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
