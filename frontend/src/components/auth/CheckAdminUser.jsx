import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const CheckAdminUser = () => {
  const { token } = useSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  let decodedToken;
  try {
    decodedToken = jwtDecode(token);
  } catch (e) {
    return <Navigate to="/signin" replace />;
  }

  if (decodedToken.role !== "admin") {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
};

export default CheckAdminUser;
