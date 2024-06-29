import { NavLink } from "react-router-dom";
// import "./Navbar.css";

const DropDownMenu = () => {
  return (
    <div className="drop_down_menu absolute z-[50] translate-x-3 p-6 bg-dark_trans_purple rounded-md font-inter text-base">
      <ul className="flex gap-12 justify-center">
        <div className="flex flex-col gap-5">
          <li>
            <NavLink to="/overview">overview</NavLink>
          </li>
          <li>
            <NavLink to="/challenge">challenge</NavLink>
          </li>
          <li>
            <NavLink to="/why_bengal_estates">why bengal estates</NavLink>
          </li>
          <li>
            <NavLink to="/partnership">Partnership</NavLink>
          </li>
        </div>
        <div className="flex flex-col gap-5">
          <li>
            <NavLink to="/value">value</NavLink>
          </li>

          <li>
            <NavLink to="/investment">investment</NavLink>
          </li>
          <li>
            <NavLink to="/faq">faq</NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default DropDownMenu;
