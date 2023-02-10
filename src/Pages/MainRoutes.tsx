import { Route } from "react-router";
import { Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import Cart from "./Cart";
import Homepage from "./Homepage";
import Login from "./Login";
import ProductPage from "./ProductPage";
import EditProduct from './EditProduct';
import RequireAuth from "../Components/RequireAuth";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/addProduct" element={<RequireAuth><AddProduct /></RequireAuth>} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/product/:productId/edit" element={<EditProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>404 : Not Found</h1>} />
    </Routes>
  );
};

export default MainRoutes;
