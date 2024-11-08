import Container from "./Container";
import PropTypes from "prop-types";

const BannerTop = ({
  image,
  bigHeader,
  smallHeader,
  paragraph,
  isOpacity,
  isBgCenter,
}) => {
  return (
    <section className="mb-[3vw] max-lg:mb-[9vw]">
      <div className="w-full h-[45rem] relative">
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className={`h-full py-[3rem] bg-no-repeat ${isBgCenter ? "bg-center" : "bg-right"} bg-cover ${isOpacity ? "opacity-20" : "opacity-1"} text-white`}
        ></div>
        <Container>
          <div className="w-[50%] max-lg:w-[90%] absolute top-1/2 -translate-y-1/2 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:text-center leading-tight">
            <h1 className="lg:text-[4vw] max-lg:text-[6vw] max-sm:text-[9vw] font-lato font-semibold text-white mb-9">
              {bigHeader}
            </h1>
            <h3 className="font-lato lg:text-3xl max-lg:text-2xl">
              {smallHeader}
            </h3>
            <p className="leading-7 mt-9 font-inter text-base">{paragraph}</p>
          </div>
        </Container>
      </div>
    </section>
  );
};

BannerTop.propTypes = {
  image: PropTypes.string,
  bigHeader: PropTypes.string,
  smallHeader: PropTypes.string,
  paragraph: PropTypes.string,
  isOpacity: PropTypes.bool,
  isBgCenter: PropTypes.bool,
};

BannerTop.defaultProps = {
  image: "",
  bigHeader: "",
  smallHeader: "",
  paragraph: "",
  isOpacity: true,
  isBgCenter: true,
};

export default BannerTop;
