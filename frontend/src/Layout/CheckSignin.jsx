import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CheckSignin = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/signin");
    }
  }, []);

  return <Outlet />;
};

export default CheckSignin;
