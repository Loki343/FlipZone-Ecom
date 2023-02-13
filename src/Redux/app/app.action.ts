import { Product } from "../../Utiles/types";
import { AppDispatch } from "../store";
import { addToCartAPI, getFromCartAPI, getProductAPI, updateProductAPI } from "./app.api";
import {
  ADD_TO_CART_SUCCESS,
  GET_FROM_CART_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PRODUCT_ERROR,
  PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "./app.types";

//define types
export interface IProductRequest {
  type: typeof PRODUCT_REQUEST;
}

export interface IProductError {
  type: typeof PRODUCT_ERROR;
}

export interface IGetProductSuccess {
  type: typeof GET_PRODUCT_SUCCESS;
  payload: Product[];
}

export interface IUpdateProductSuccess {
  type: typeof UPDATE_PRODUCT_SUCCESS;
  payload: Product;
}

export type AppAction =
  | IProductRequest
  | IProductError
  | IGetProductSuccess
  | IUpdateProductSuccess
  | any
  | any;

//main action
export const productRequest = (): IProductRequest => ({
  type: PRODUCT_REQUEST,
});

export const productError = (): IProductError => ({
  type: PRODUCT_ERROR,
});

export const getProductSuccess = (data: Product[]): IGetProductSuccess => ({
  type: GET_PRODUCT_SUCCESS,
  payload: data,
});

export const updateProductSuccess = (
  payload: Product
): IUpdateProductSuccess => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload,
});

export const addToCartSuccess = (payload: {
  title: string;
  image: string;
  price: number;
  count:number
}): any => ({
  type: ADD_TO_CART_SUCCESS,
  payload,
});

export const getFromCartSuccess = (cartData: any): any => ({
  type: GET_FROM_CART_SUCCESS,
  payload: cartData,
});

//action functions
export const getFromCart = (): any => async (dispatch: AppDispatch) => {
  dispatch(productRequest());
  try {
    let data = await getFromCartAPI();
    if (data) {
      dispatch(getFromCartSuccess(data));
    }
  } catch (error) {
    dispatch(productError());
  }
};

export const getProducts =
  (getProductsParams?: { params: { category: string[] } }): any =>
  async (dispatch: AppDispatch) => {
    dispatch(productRequest());
    try {
      let data = await getProductAPI(getProductsParams);
      if (data) {
        dispatch(getProductSuccess(data));
      }
    } catch (error) {
      dispatch(productError());
    }
  };

export const updateProducts =
  (id: number, payload: { title: string; price: number }): any =>
  async (dispatch: AppDispatch) => {
    dispatch(productRequest());
    try {
      let data = await updateProductAPI(id, payload);
      if (data) {
        dispatch(updateProductSuccess(data));
      }
    } catch (error) {
      dispatch(productError());
    }
  };

export const addToCart =
  (payload: { title: string; price: number; image: string,count:number }): any =>
  async (dispatch: AppDispatch) => {
    dispatch(productRequest());
    try {
      let data = await addToCartAPI(payload);
      console.log(data);

      if (data) {
        dispatch(addToCartSuccess(data));
      }
    } catch (error) {
      dispatch(productError());
    }
  };
