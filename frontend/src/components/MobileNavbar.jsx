import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "../css/Navbar.css";
import { useState, useRef, useContext } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MobileNavbarContext } from "../../contexts/MobileNavbarContext";
import Button from "./Button";

const MobileNavbar = () => {
  const mainNavMenuRef = useRef();
  const dropDownMenuRef = useRef();

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
              to="/property"
              className="text-base"
            >
              property
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setMobileNavActive(false)}
              style={handleActiveLink}
              to="/blog"
              className="text-base"
            >
              blog
            </NavLink>
          </li>
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
                <li onClick={() => setMobileNavActive(false)}>
                  <NavLink to="/overview">overview</NavLink>
                </li>
                <li onClick={() => setMobileNavActive(false)}>
                  <NavLink to="/challenge">challenge</NavLink>
                </li>
                <li onClick={() => setMobileNavActive(false)}>
                  <NavLink to="/why_bengal_estates">why bengal estates</NavLink>
                </li>
                <li onClick={() => setMobileNavActive(false)}>
                  <NavLink to="/value">value</NavLink>
                </li>
                <li onClick={() => setMobileNavActive(false)}>
                  <NavLink to="/investment">investment</NavLink>
                </li>
                <li onClick={() => setMobileNavActive(false)}>
                  <NavLink to="/faq">faq</NavLink>
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
          <NavLink
            to="/signin"
            onClick={() => setMobileNavActive(false)}
            className="mt-6 flex justify-center"
          >
            <Button title={"sign in"} width={"7rem"} height={"2.3rem"} />
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default MobileNavbar;
