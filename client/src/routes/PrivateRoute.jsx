import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const isAuth = useSelector((state) => state.user.auth);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
