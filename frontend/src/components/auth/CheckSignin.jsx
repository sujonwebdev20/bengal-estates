import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CheckSignin = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (!token) {
      if (location.pathname === "/signin") {
        return navigate("/signin");
      } else if (location.pathname === "/signup") {
        return navigate("/signup");
      } else {
        return navigate("/signin");
      }
    }
  }, [location.pathname, token, navigate]);

  return <Outlet />;
};

export default CheckSignin;
