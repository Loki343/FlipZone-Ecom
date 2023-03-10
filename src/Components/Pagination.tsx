import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IPaginationProps {
  productLength: number;
  perPage: number;
  activePage: number;
  handlePageChange: (page: number) => void;
}

const Pagination = ({
  productLength,
  perPage,
  activePage,
  handlePageChange,
}: IPaginationProps) => {
  const totalPage = Math.ceil(productLength / perPage);
  return (
    <div>
      <Flex gap={5} p={5}>
        {activePage !== 1 && (
          <Button onClick={() => handlePageChange(activePage - 1)}>Prev</Button>
        )}
        {activePage > 2 && "..."}
        {Array(totalPage)
          .fill("")
          // .filter((item, index) => {
          //   if (index < activePage + 2 && index > activePage - 2) {
          //     return true;
          //   }
          //   return false
          // })
          .map((item, index) => (
            <Button
              colorScheme={activePage === index + 1 ? "cyan" : "gray"}
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
        {activePage < totalPage - 2 && "..."}
        {activePage !== totalPage && (
          <Button onClick={() => handlePageChange(activePage + 1)}>Next</Button>
        )}
      </Flex>
      <p>** if you want to Edit product or Add new product <Link to='/login' style={{color:'blue'}}>Signin</Link> **</p>
    </div>
  );
};

export default Pagination;
