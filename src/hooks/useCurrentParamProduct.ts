import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../Redux/app/app.action";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { Product } from "../Utiles/types";

const useCurrentParamProduct = () => {
  const { productId } = useParams();
  const products = useAppSelector((store) => store.AppReducer.data);
  const dispatch = useAppDispatch();
  const [currentProduct, setCurrentProduct] = useState<Product>();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, products.length]);

  useEffect(() => {
    if (productId) {
      const productDetails = products.find(
        (item) => item.id === Number(productId)
      );
      setCurrentProduct(productDetails);
    }
  }, [productId, products]);

  return { currentProduct, productId };
};

export default useCurrentParamProduct;
