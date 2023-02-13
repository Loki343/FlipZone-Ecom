import { Route } from "react-router";
import { Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import Cart from "./Cart";
import Login from "./Login";
import ProductPage from "./ProductPage";
import EditProduct from "./EditProduct";
import RequireAuth from "../Components/RequireAuth";
import AllProduct from "./AllProduct";
import Homepage from "./HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/allProduct" element={<AllProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/addProduct"
        element={
          <RequireAuth>
            <AddProduct />
          </RequireAuth>
        }
      />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route
        path="/product/:productId/edit"
        element={
          <RequireAuth>
            <EditProduct />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>404 : Not Found</h1>} />
    </Routes>
  );
};

export default MainRoutes;
