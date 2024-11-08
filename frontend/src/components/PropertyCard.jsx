import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const PropertyCard = ({ dataItems }) => {
  const propertyCardAnim = useRef();

  useGSAP(() => {
    gsap.fromTo(
      propertyCardAnim.current,
      { scale: 0.5 },
      {
        scale: 1,
        duration: 0.5,
        stagger: 1,
      }
    );
  });

  let isAvailable = "";

  if (dataItems?.isAvailable === "Available") {
    isAvailable = "bg-green-300";
  } else if (dataItems?.isAvailable === "Up Coming") {
    isAvailable = "bg-[#7ea1ff]";
  } else {
    isAvailable = "bg-[#EB5144]";
  }

  return (
    <Link to={`/properties/${dataItems?._id}`}>
      <div ref={propertyCardAnim} className="propertyCardAnim">
        <div className="h-[22rem] max-md:h-[25rem] bg-dark_trans_purple border-2 border-dark_purple rounded-lg hover:border-light_purple hover:scale-105 transition-all overflow-hidden">
          <img
            src={dataItems?.thumbnail}
            alt="House"
            className="w-full h-[60%] object-cover"
          />

          <div className="p-3">
            <div className="flex justify-between items-center">
              <p className="font-inter text-md font-bold">
                ${dataItems?.price.toLocaleString()}&nbsp;
                <small className="text-light_purple text-sm font-normal">
                  per/month
                </small>
              </p>

              <small
                className={`${isAvailable} text-black rounded-sm px-2 font-bold`}
              >
                {dataItems?.isAvailable}
              </small>
            </div>
            <h3 className="font-lato text-xl font-bold">
              {dataItems?.name?.length > 30
                ? dataItems?.name.slice(1, 30) + "..."
                : dataItems?.name}
            </h3>
            <p className={`font-inter text-md  max-[320px]:text-sm`}>
              {dataItems?.location.slice(1, 30) + "..."}
            </p>
            <div className="flex justify-between mt-2 font-inter font-bold uppercase">
              <div className="flex items-center gap-2">
                <IoBed className="text-3xl text-light_purple" />
                <span className="text-lg max-[320px]:text-md">
                  {dataItems?.bed}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaBath className="text-2xl text-light_purple" />
                <span className="text-lg max-[320px]:text-md">
                  {dataItems?.bath}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineZoomOutMap className="text-2xl text-light_purple" />
                <span className="text-lg max-[320px]:text-md">
                  {dataItems?.propertySize} sqft
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

PropertyCard.propTypes = {
  dataItems: PropTypes.object,
};

export default PropertyCard;
