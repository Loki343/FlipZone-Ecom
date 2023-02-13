import axios, { AxiosResponse } from "axios";
import { Product } from "../../Utiles/types";

export const getProductAPI = async (getProductsParams?: {
  params: { category: string[] };
}) => {
  try {
    let res: AxiosResponse<Product[]> = await axios.get(
      "http://localhost:8080/products",
      getProductsParams
    );
    return res.data;
  } catch (error) {
    console.log("getProductAPIError", error);
  }
};

export const updateProductAPI = async (
  id: number,
  payload: {
    title: string;
    price: number;
  }
) => {
  try {
    let res: AxiosResponse<Product> = await axios.patch(
      `http://localhost:8080/products/${id}`,
      payload
    );
    return res.data;
  } catch (error) {
    console.error("updateProductAPIError", error);
  }
};

export const addToCartAPI = async (payload: {
  title: string | undefined;
  price: number | undefined;
  image: string | undefined;
  count: number | undefined;
}) => {
  try {
    let res = await axios.post(`http://localhost:8080/cart`, payload);
    return res.data;
  } catch (error) {
    console.error("addToCartAPIError", error);
  }
};

export const getFromCartAPI = async () => {
  try {
    let res = await axios.get("http://localhost:8080/cart");
    return res.data;
  } catch (error) {
    console.log("getFromCartAPIError", error);
  }
};
