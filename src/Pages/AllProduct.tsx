import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import FilterAndSort from "../Components/FilterAndSort";
import ProductCard from "../Components/ProductCard";
import { getProducts } from "../Redux/app/app.action";
import { useAppDispatch } from "../Redux/store";
import { useAppSelector } from "../Redux/store";
import Pagination from "../Components/Pagination";

const AllProduct = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.AppReducer.data);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [activePage, setActivePage] = useState(1);
  // console.log("activepage", activePage);
  const handlePageChange = (newPage: number): void => {
    setActivePage(newPage);
  };

  useEffect(() => {
    if (products.length === 0 || location) {
      const getProductsParam = {
        params: {
          category: searchParams.getAll("filter"),
        },
      };
      dispatch(getProducts(getProductsParam));
    }
  }, [location.search, dispatch, location, searchParams, products.length]);

  return (
    <div>
      <Flex>
        <Box minW={"280px"} border={"1px solid lightgray"}>
          <FilterAndSort />
        </Box>
        <Box>
          <Flex flexWrap={"wrap"} justifyContent={"center"}>
            {products.length > 0 &&
              products
                .filter((item, index) => {
                  return (
                    index >= 3 * (activePage - 1) && index < 3 * activePage
                  );
                })
                .map((item) => <ProductCard key={item.id} {...item} />)}
          </Flex>

          <Flex justifyContent={"center"}>
            <Pagination
              productLength={products.length}
              perPage={3}
              activePage={activePage}
              handlePageChange={handlePageChange}
            />
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default AllProduct;
