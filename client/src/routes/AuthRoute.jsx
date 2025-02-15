import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../store/slices/apiSlice";
import { useEffect, useState } from "react";

function AuthRoute() {
  const isAuth = useSelector((state) => state.user.auth);
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth && localStorage.token) {
      dispatch(getUserInfo(localStorage.token)).then(() => {
        setPending(false);
      });
    } else {
      setPending(false);
    }
  }, [isAuth, dispatch]);

  return !pending ? <Outlet /> : null;
}

export default AuthRoute;
