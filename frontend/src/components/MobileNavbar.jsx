import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "../css/Navbar.css";
import { useState, useRef, useContext, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MobileNavbarContext } from "../../contexts/MobileNavbarContext";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { signout } from "../redux/features/auth/authSlice";
import { useSignoutMutation } from "../redux/features/auth/authApi";
import { toast } from "react-toastify";

const MobileNavbar = () => {
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
  const [, setMobileNavActive] = useContext(MobileNavbarContext);
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
    setMobileNavActive(false);
  }

  return (
    <>
      <div
        className={`w-full h-screen fixed top-0 left-0 right-0 bottom-0 flex justify-end`}
      >
        <div
          onClick={() => setMobileNavActive(false)}
          className="flex justify-end w-1/2"
        ></div>
        <ul
          ref={mainNavMenuRef}
          className="uppercase bg-dark_trans_purple w-1/2 py-2 [&>li>a]:px-5 [&>li]:border-b-2 [&>li]:border-light_purple [&>li:last-child]:border-none [&>li>a]:inline-block [&>li>a]:py-4 [&>li>a]:w-full"
        >
          <div className="flex justify-end">
            <IoClose
              onClick={() => setMobileNavActive(false)}
              className="lg:hidden min-[320px]:block text-5xl text-light_purple"
            />
          </div>
          <li>
            <NavLink
              onClick={() => setMobileNavActive(false)}
              style={handleActiveLink}
              to="/"
              className="text-base"
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setMobileNavActive(false)}
              style={handleActiveLink}
              to="/property/all"
              className="text-base"
            >
              property
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setMobileNavActive(false)}
              style={handleActiveLink}
              to="/blog/all"
              className="text-base"
            >
              blog
            </NavLink>
          </li>
          {token && decodedToken.role === "admin" && (
            <li>
              <NavLink
                onClick={() => setMobileNavActive(false)}
                style={handleActiveLink}
                to="/admin"
                className="text-base"
              >
                admin
              </NavLink>
            </li>
          )}
          <li
            style={{ transition: "ease-in-out" }}
            className="drop_down cursor-pointer"
            onClick={showDropDownMenuHandler}
          >
            <NavLink to="#">investor</NavLink>
            <div
              ref={dropDownMenuRef}
              className={`mbl_drop_down_menu pl-6 bg-dark_trans_purple rounded-md font-inter text-base overflow-hidden transition-all duration-500 ease-in-out ${isDropDownMenuShow ? "max-h-max" : "h-0"}`}
            >
              <ul className="flex flex-col gap-y-5 [&>li:last-child]:pb-4">
                <li onClick={() => setMobileNavActive(false)} className="ml-4">
                  <NavLink to="/overview">overview</NavLink>
                </li>
                <li onClick={() => setMobileNavActive(false)} className="ml-4">
                  <NavLink to="/challenge">challenge</NavLink>
                </li>
                <li onClick={() => setMobileNavActive(false)} className="ml-4">
                  <NavLink to="/why_bengal_estates">why bengal estates</NavLink>
                </li>
                <li onClick={() => setMobileNavActive(false)} className="ml-4">
                  <NavLink to="/value">value</NavLink>
                </li>
                <li onClick={() => setMobileNavActive(false)} className="ml-4">
                  <NavLink to="/investment">investment</NavLink>
                </li>
                <li onClick={() => setMobileNavActive(false)} className="ml-4">
                  <NavLink to="/faq">faq</NavLink>
                </li>
                <li onClick={() => setMobileNavActive(false)} className="ml-4">
                  <NavLink to="/partnership">partnership</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink
              onClick={() => setMobileNavActive(false)}
              style={handleActiveLink}
              to="/tenant_portal"
              className="text-base"
            >
              tenant portal
            </NavLink>
          </li>
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

export default MobileNavbar;
