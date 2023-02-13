import React, { useEffect } from "react";
import { getFromCart } from "../Redux/app/app.action";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

const Cart = () => {
  const cartData = useAppSelector((store) => store.AppReducer.getCartData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFromCart());
  }, [dispatch]);
  // console.log(cartData);

  const deleteFromCart = (id: number) => {
    console.log(id);
    axios.delete(`http://localhost:8080/cart/${id}`);
    window.location.reload();
  };
  return (
    <div>
      <Heading fontFamily="cursive" color={"rgb(49,87,241)"} marginTop={'20px'}>
        My cart zone
      </Heading>
      <TableContainer marginTop={'50px'} marginBottom={'100px'}>
        <Table variant="simple">
          <TableCaption>7 days return policy avialable</TableCaption>
          <Thead>
            <Tr>
              <Th>title</Th>
              <Th>image</Th>
              <Th>Item count</Th>
              <Th>unit price</Th>
              <Th>Delete product</Th>
              <Th>total price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartData.length > 0 &&
              cartData.map((item: any) => (
                <Tr key={item.id}>
                  <Td>{item.title}</Td>
                  <Td>
                    <img
                      src={item.image}
                      alt="product-pic"
                      style={{ height: "80px", width: "60px" }}
                    />
                  </Td>
                  <Td>
                    <Button>-</Button>
                    <Button>{item.count}</Button>
                    <Button>+</Button>
                  </Td>
                  <Td>{item.price}</Td>
                  <Td>
                    <button onClick={() => deleteFromCart(item.id)}>
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                        width={"50px"}
                        alt=""
                      />
                    </button>
                  </Td>
                  <Td>{Number(item.price) * Number(item.count)}</Td>
                </Tr>
              ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>...</Th>
              <Th>...</Th>
              <Th>...</Th>
              <Th>total Price</Th>
              <Th>...</Th>
              <Th>
                {Math.round(
                  cartData.reduce((a: any, c: any) => a + c.price, 0)
                )}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Cart;
