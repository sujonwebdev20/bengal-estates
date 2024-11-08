import PropTypes from "prop-types";

const BannerBottom = ({ image, isOpacity, header }) => {
  return (
    <div className="relative mb-20">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className={`w-full h-[37vw] max-lg:h-[45vw] bg-no-repeat bg-center bg-cover ${isOpacity ? "opacity-50" : "opacity-1"}`}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-lato font-bold text-[3vw] max-lg:text-[4vw] text-center">
        {header}
      </div>
    </div>
  );
};

BannerBottom.propTypes = {
  image: PropTypes.string,
  isOpacity: PropTypes.bool,
  header: PropTypes.string,
};

BannerBottom.defaultProps = {
  image: "",
  isOpacity: true,
  header: "",
};

export default BannerBottom;
