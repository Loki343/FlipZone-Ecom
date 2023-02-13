import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  chakra,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { Product } from "../Utiles/types";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { addToCart } from "../Redux/app/app.action";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

//   interface RatingProps {
//     rating: number;
//     numReviews: number;
//   }

//   function Rating({ rating, numReviews }: RatingProps) {
//     return (
//       <Box d="flex" alignItems="center">
//         {Array(5)
//           .fill('')
//           .map((_, i) => {
//             const roundedRating = Math.round(rating * 2) / 2;
//             if (roundedRating - i >= 1) {
//               return (
//                 <BsStarFill
//                   key={i}
//                   style={{ marginLeft: '1' }}
//                   color={i < rating ? 'teal.500' : 'gray.300'}
//                 />
//               );
//             }
//             if (roundedRating - i === 0.5) {
//               return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
//             }
//             return <BsStar key={i} style={{ marginLeft: '1' }} />;
//           })}
//         <Box as="span" ml="2" color="gray.600" fontSize="sm">
//           {numReviews} review{numReviews > 1 && 's'}
//         </Box>
//       </Box>
//     );
//   }

function ProductCard({ id, title, price, image }: Product) {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((store) => store.AuthReducer.isAuth);
  console.log(auth);
  const addToCartInCard = () => {
    const payload = {
      title: title,
      price: price,
      image: image,
      count: 1,
    };
    // console.log(payload);
    dispatch(addToCart(payload));
  };

  return (
    <Flex p={10} w="fit-content" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}
        <Link to={`/product/${id}`}>
          <Image
            src={image}
            alt={`Picture of ${title}`}
            roundedTop="lg"
            boxSize={"400px"}
            objectFit={"contain"}
            p={4}
          />
        </Link>
        <Box p="6">
          {data.isNew && (
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              Offers
            </Badge>
          )}

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {title}
            </Box>
          </Flex>
          <Flex justifyContent={"space-between"}>
            {auth &&
              <Tooltip
                label="Edit Product for Admin"
                bg="lightblue"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}
              >
                <Link to={`/product/${id}/edit`}>
                  <Box>
                    {/* <Icon cursor={"pointer"} as={AiOutlineEdit} w={7} h={7} /> */}
                    <Button>Edit Product</Button>
                  </Box>
                </Link>
              </Tooltip>
            }
            <Tooltip
              label="Add to cart"
              bg="lightblue"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a display={"flex"}>
                <Button alignSelf={"center"} onClick={() => addToCartInCard()}>
                  Add to Cart
                </Button>
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                <span style={{ fontWeight: "700" }}>Rs(₹) : </span>
              </Box>
              {price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductCard;
