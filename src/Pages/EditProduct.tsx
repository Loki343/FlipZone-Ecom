import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProducts, updateProducts } from "../Redux/app/app.action";
import { useAppDispatch, useAppSelector } from "../Redux/store";

const EditProduct = () => {
  const { productId } = useParams();
  const products = useAppSelector((store) => store.AppReducer.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  const updateHandler = () => {
    if (title.length && price) {
      const payload = {
        title: title,
        price: price,
      };
      dispatch(updateProducts(Number(productId), payload)).then(()=>{
        navigate('/')
      })
    }
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, products.length]);

  useEffect(() => {
    if (productId) {
      const currentProduct = products.find(
        (item) => item.id === Number(productId)
      );
      currentProduct && setTitle(currentProduct.title);
      currentProduct && setPrice(currentProduct.price);
    }
  }, [productId, products]);

  return (
    <Box>
      <Heading marginTop={10}>Edit Product</Heading>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4}>
          <FormControl id="title">
            <FormLabel>Title</FormLabel>
            <Input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} />
          </FormControl>
          <FormControl id="price">
            <FormLabel>Price</FormLabel>
            <Input value={price} type="number" onChange={(e) => {setPrice(Number(e.target.value))}} />
          </FormControl>
        </Stack>
      </Flex>
      <Button onClick={updateHandler}>Update Product</Button>
    </Box>
  );
};

export default EditProduct;
