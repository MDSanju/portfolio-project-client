import React from "react";
import useAuth from "../../../hooks/useAuth";
import PuffLoader from "react-spinners/PuffLoader";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useAuth();
  let location = useLocation();

  if (isLoading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "35vh" }}
      >
        <PuffLoader color={"crimson"} size={60} />
      </div>
    );
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/home" state={{ from: location }} />;
};

export default PrivateRoute;
