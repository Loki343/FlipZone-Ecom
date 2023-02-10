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
    console.log("getProductAPI Error", error);
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
    console.error(error);
  }
};
