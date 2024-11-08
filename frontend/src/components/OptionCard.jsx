import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const OptionCard = ({ path, icon, title }) => {
  return (
    <Link
      target={path.startsWith("https") ? "_blank" : ""}
      to={path}
      className="w-full h-[11rem] flex justify-start flex-col items-center bg-dark_trans_purple p-5 rounded-lg border-2 border-transparent hover:border-light_purple hover:scale-105 transition-all"
    >
      {icon}
      <h3 className="text-xl font-lato text-center mt-4">{title}</h3>
    </Link>
  );
};

OptionCard.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default OptionCard;
