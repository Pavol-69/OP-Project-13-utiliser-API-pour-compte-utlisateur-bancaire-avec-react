import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PublicRoute() {
  const isAuth = useSelector((state) => state.auth);

  return !isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default PublicRoute;
