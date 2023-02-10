import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "./../Redux/store";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isAuth = useAppSelector((store) => store.AuthReducer.isAuth);
  const location = useLocation(); //it is a object where you store your last location
  console.log(location)
  if (!isAuth) {
    return <Navigate to="/login" replace state={{data:location.pathname}}/>;
  }
  return children;
};

export default RequireAuth;
