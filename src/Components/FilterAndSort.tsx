import {
  Box,
  Checkbox,
  CheckboxGroup,
  Heading,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const FilterAndSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
//   const [searchParams1, setSearchParams1] = useSearchParams();
  const [filterValues, setFilterValues] = useState<string[]>(
    searchParams.getAll("filter") || []
  );
  const [sortValue, setSortValue] = useState<string>("");

//   console.log(searchParams1.getAll("sort"));
  console.log(sortValue);

  const handleFilterChange = (value: string[]) => {
    setFilterValues(value);
  };

  const handleSortChange = (value: string) => {
    setSortValue(value);
  };

  useEffect(() => {
    let params: { filter?: string[] } = {};
    if (filterValues.length) {
      params.filter = filterValues;
    }
    setSearchParams(params);
  }, [filterValues, setSearchParams]);

//   useEffect(() => {
//     let params1: { sort?: any } = {};
//     // if (sortValue.length) {
//     params1.sort = filterValues;
//     // }
//     setSearchParams1(params1);
//   }, [sortValue, setSearchParams1]);

  return (
    <Box p={6}>
      <Heading p={6}>Filter</Heading>
      <CheckboxGroup
        colorScheme="gray"
        value={filterValues}
        onChange={handleFilterChange}
      >
        <Stack spacing={[1, 5]} direction={["column"]}>
          <Checkbox value="bags">Bags</Checkbox>
          <Checkbox value="electronics">Electronics</Checkbox>
          <Checkbox value="jewelery">Jewellery</Checkbox>
          <Checkbox value="men's clothing">Men's Clothing</Checkbox>
          <Checkbox value="women's clothing">Women's Clothing</Checkbox>
        </Stack>
      </CheckboxGroup>

      <Heading p={6}>Sort(Price)</Heading>
      <RadioGroup value={sortValue} onChange={handleSortChange}>
        <Stack direction="column">
          <Radio value="asc">Ascending</Radio>
          <Radio value="desc">Descending</Radio>
          <Radio value="">RESET</Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default FilterAndSort;
