import { NavLink } from "react-router-dom";

const navigationArray = [
  { label: "overview", path: "/overview", group: 1 },
  { label: "challenge", path: "/challenge", group: 1 },
  { label: "why bengal estates", path: "/why-bengal-estates", group: 1 },
  { label: "partnership", path: "/partnership", group: 1 },
  { label: "value", path: "/value", group: 2 },
  { label: "investment", path: "/investment", group: 2 },
  { label: "faq", path: "/faq", group: 2 },
];

const DropDownMenu = () => {
  // Group-wise navigation items
  const group1Items = navigationArray.filter((item) => item.group === 1);
  const group2Items = navigationArray.filter((item) => item.group === 2);

  return (
    <div className="drop_down_menu absolute right-[10rem] z-[50] translate-x-3 p-6 bg-dark_trans_purple rounded-md font-inter text-base">
      <ul className="flex gap-12 justify-center">
        <div className="flex flex-col gap-5">
          {group1Items.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {group2Items.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default DropDownMenu;
