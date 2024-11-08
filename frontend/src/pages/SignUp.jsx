import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useSignupMutation } from "../redux/features/auth/authApi";

import { useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const [signupMutation] = useSignupMutation();

  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signupMutation(userData).unwrap();
      if (response.success) {
        toast.success(response.message);
      }
      navigate(-1);
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
            className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) =>
              setUserData({
                ...userData,
                name: e.target.value,
              })
            }
          />
          <input
            className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setUserData({
                ...userData,
                email: e.target.value,
              })
            }
          />
          <input
            className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
            type="phone"
            name="tel"
            placeholder="Phone"
            onChange={(e) =>
              setUserData({
                ...userData,
                phone: e.target.value,
              })
            }
          />
          <input
            className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) =>
              setUserData({
                ...userData,
                password: e.target.value,
              })
            }
          />
          <input
            className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e) =>
              setUserData({
                ...userData,
                confirmPassword: e.target.value,
              })
            }
          />
          <div className="mt-5">
            <Button title={"sign up"} width={"10rem"} height={"2.5rem"} />
          </div>
        </form>
        <div className="flex justify-center mt-4 gap-2 font-inter">
          <span className="text-gray-300">Already have an account?</span>
          <Link to="/signin" className="text-light_purple">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
