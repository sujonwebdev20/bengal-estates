import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import { useSigninMutation } from "../redux/features/auth/authApi";
import { setUserInfo } from "../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const SignIn = () => {
  const [signinMutation] = useSigninMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signinMutation(userData).unwrap();
      dispatch(setUserInfo(response));

      if (response.success) {
        toast.success(response.message);
      }
      navigate("/");
    } catch (error) {
      if (error) {
        toast.error(error.data.message);
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[30rem] mx-5 bg-dark_trans_purple px-3 py-8 rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-3 font-inter text-lg"
        >
          <img className="h-11 mb-4" src="/images/logo.webp" alt="Brand" />
          <input
            onChange={(e) =>
              setUserData({
                ...userData,
                email: e.target.value,
              })
            }
            className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            onChange={(e) =>
              setUserData({
                ...userData,
                password: e.target.value,
              })
            }
            className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
            type="password"
            name="password"
            placeholder="Password"
          />
          <div className="mt-5">
            <Button title={"sign in"} width={"10rem"} height={"2.5rem"} />
          </div>
        </form>
        <div className="flex justify-center mt-4 gap-2 font-inter">
          <span className="text-gray-300">No account?</span>
          <Link to="/signup" className="text-light_purple">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
