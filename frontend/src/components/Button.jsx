import "../css/Button.css";
import PropTypes from "prop-types";

const Button = ({ width, height, title, clickHandle, type, disabled }) => {
  return (
    <div style={{ width, height }}>
      <button
        disabled={disabled}
        type={type}
        onClick={clickHandle}
        id="btn"
        className="text-white bg-medium_dark_purple w-full h-full rounded-[30px] capitalize border-2 border-light_purple"
      >
        {title}
      </button>
    </div>
  );
};

Button.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  clickHandle: PropTypes.func,
};

export default Button;
