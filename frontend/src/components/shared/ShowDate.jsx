import dayjs from "dayjs";
import PropTypes from "prop-types";

const ShowDate = ({ date, className }) => {
  return (
    <small className={`bg-inp_purple rounded-sm px-2 ${className}`}>
      {dayjs(date).format("MMM D, YYYY")}
    </small>
  );
};

ShowDate.propTypes = {
  date: PropTypes.string.isRequired,
  className: PropTypes.string,
};
ShowDate.defaultProps = {
  date: "",
  className: "",
};

export default ShowDate;
