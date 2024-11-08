import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "../../css/Navbar.css";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { signout } from "../../redux/features/auth/authSlice";
import { useSignoutMutation } from "../../redux/features/auth/authApi";
import { toast } from "react-toastify";
import { configurePath } from "./configurePath";
import { dropdownConfigurePath } from "./configurePath";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";

const MobileNavbar = ({ mobileHamburgerHandler }) => {
  const mainNavMenuRef = useRef();
  const dropDownMenuRef = useRef();
  const { token } = useSelector((state) => state.auth);
  const signinUser = useSelector((state) => state.auth);
  const [signoutMutation] = useSignoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signoutHandle = async () => {
    const response = await signoutMutation();

    if (response.data.success) {
      toast.success(response.data.message);
    }

    if (response.data.success) {
      dispatch(signout(response));
      return navigate("/");
    }
  };

  let decodedToken = null;
  if (token) {
    const jwtToken = jwtDecode(token);
    decodedToken = jwtToken;
  }

  const [isDropDownMenuShow, setIsDropDownMenuShow] = useState(false);
  const handleActiveLink = ({ isActive }) => {
    return {
      color: isActive && "#b469ff",
    };
  };

  const showDropDownMenuHandler = (e) => {
    e.stopPropagation();
    setIsDropDownMenuShow(!isDropDownMenuShow);
  };

  useGSAP(() => {
    gsap.fromTo(
      mainNavMenuRef.current,
      { width: 0 },
      { width: "50%", duration: 0.5 }
    );
  });

  if (window.innerWidth > 1080) {
    mobileHamburgerHandler(false);
  }

  return (
    <>
      <div
        className={`w-full min-h-screen lg:hidden fixed top-0 left-0 right-0 bottom-0 flex justify-end`}
      >
        <div
          onClick={() => mobileHamburgerHandler(false)}
          className="flex justify-end w-1/2"
        ></div>
        <ul
          ref={mainNavMenuRef}
          className="capitalize bg-dark_trans_purple w-1/2 py-2 [&>li>a]:px-5 [&>li]:border-b-2 [&>li]:border-light_purple [&>li:last-child]:border-none [&>li>a]:inline-block [&>li>a]:py-4 [&>li>a]:w-full"
        >
          <div className="flex justify-end">
            <IoClose
              onClick={() => mobileHamburgerHandler(false)}
              className="text-5xl text-light_purple"
            />
          </div>
          {/* Normal path */}
          {configurePath.map((configure, index) => (
            <li key={index}>
              <NavLink
                onClick={() => mobileHamburgerHandler(false)}
                style={handleActiveLink}
                to={configure.path}
                className="text-base"
              >
                {configure.label}
              </NavLink>
            </li>
          ))}
          {/* Admin path */}
          {token && decodedToken.role === "admin" && (
            <li>
              <NavLink
                onClick={() => mobileHamburgerHandler(false)}
                style={handleActiveLink}
                to="/admin"
                className="text-base"
              >
                admin
              </NavLink>
            </li>
          )}

          {/* Dropdown path */}
          <li
            style={{ transition: "ease-in-out" }}
            className="cursor-pointer"
            onClick={showDropDownMenuHandler}
          >
            <NavLink to="#">
              <span className="flex items-center gap-1">
                investor
                <IoIosArrowDown
                  className={`${isDropDownMenuShow && "rotate-180"}`}
                />
              </span>
            </NavLink>
            <div
              ref={dropDownMenuRef}
              className={`mbl_drop_down_menu pl-6 rounded-md font-inter text-base overflow-auto transition-all duration-500 ease-in-out ${isDropDownMenuShow ? "h-max" : "hidden"}`}
            >
              <ul className="flex flex-col gap-y-5 [&>li:last-child]:pb-4 h-[20rem]">
                {dropdownConfigurePath.map((configure, index) => (
                  <li
                    key={index}
                    onClick={() => mobileHamburgerHandler(false)}
                    className="ml-4"
                  >
                    <NavLink to={configure.path}>{configure.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* Button */}
          <div className="w-full flex justify-center items-center gap-8 mt-5">
            {signinUser && signinUser.token ? (
              <Button
                width={"7rem"}
                height={"2.3rem"}
                title={"signout"}
                clickHandle={signoutHandle}
              />
            ) : (
              <Link to="/signin">
                <Button width={"7rem"} height={"2.3rem"} title={"sign in"} />
              </Link>
            )}
          </div>
        </ul>
      </div>
    </>
  );
};

MobileNavbar.propTypes = {
  mobileHamburgerHandler: PropTypes.func,
};

export default MobileNavbar;
