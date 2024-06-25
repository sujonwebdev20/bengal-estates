import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const ProfileNavList = ({ title, icon }) => {
  return (
    <>
      <NavLink to={"/profile/favorite"}>
        <div className="flex flex-col gap-1 min-w-[240px]  font-sans text-base font-normal text-[#ffffffc7]">
          <div
            role="button"
            tabIndex={0}
            className="flex items-center w-full px-2 py-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-dark_trans_purple focus:text-dark_trans_purple active:text-dark_trans_purple outline-none"
          >
            <div className="grid place-items-center mr-4">{icon}</div>
            {title}
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default ProfileNavList;
