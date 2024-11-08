import { Link } from "react-router-dom";
import ShowDate from "./shared/ShowDate";
import PropsTypes from "prop-types";

const NewsListItems = ({ dataItems }) => {
  return (
    <Link to={`/newsies/${dataItems?._id}`}>
      <div className="arrow_link border-b border-dark_trans_purple py-5">
        <p className="text-base">
          <ShowDate date={dataItems?.createdAt} />
        </p>
        <h3 className="my-2 md:text-3xl text-2xl font-bold text-purple-50">
          {dataItems.title}
        </h3>

        {/* <span className="text-purple-600 text-xl">See more...</span> */}
        <div className="arrow">
          <div className="head"></div>
        </div>
      </div>
    </Link>
  );
};

NewsListItems.propTypes = {
  dataItems: PropsTypes.object.isRequired,
};

NewsListItems.defaultProps = {
  dataItems: {},
};

export default NewsListItems;
