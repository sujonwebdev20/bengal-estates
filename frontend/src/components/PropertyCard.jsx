import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const PropertyCard = ({ propertyData }) => {
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

  if (propertyData.isAvailable === "Available") {
    isAvailable = "bg-green-300";
  } else if (propertyData.isAvailable === "Up Coming") {
    isAvailable = "bg-[#7ea1ff]";
  } else {
    isAvailable = "bg-[#EB5144]";
  }

  return (
    <div
      ref={propertyCardAnim}
      className="propertyCardAnim h-[22rem] bg-dark_trans_purple shadow-lg rounded-[10px] overflow-hidden"
    >
      <Link to={`/property/${propertyData._id}`}>
        <img
          src={propertyData.thumbnail}
          alt="House"
          className="w-full h-[60%] object-cover"
        />

        <div className="p-3">
          <div className="flex justify-between items-center">
            <p className="font-inter text-md font-bold">
              ${propertyData.price}
            </p>
            {/* <p className="bg-green-300 text-black rounded-sm px-2 font-bold"> */}
            <small
              className={`${isAvailable} text-black rounded-sm px-2 font-bold`}
            >
              {propertyData.isAvailable}
            </small>
            {/* <p className="bg-[#EB5144] text-black rounded-sm px-2 font-bold">
              Occupied
            </p> */}
          </div>
          <h3 className="font-lato text-xl font-bold">{propertyData.name}</h3>
          <p className={`font-inter text-md  max-[320px]:text-sm`}>
            {propertyData.location}
          </p>
          <div className="flex justify-between mt-2 font-inter font-bold uppercase">
            <div className="flex items-center gap-2">
              <IoBed className="text-3xl text-light_purple" />
              <span className="text-lg max-[320px]:text-md">
                {propertyData.bed}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaBath className="text-2xl text-light_purple" />
              <span className="text-lg max-[320px]:text-md">
                {propertyData.bath}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineZoomOutMap className="text-2xl text-light_purple" />
              <span className="text-lg max-[320px]:text-md">
                {propertyData.propertySize} sqft
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

PropertyCard.propTypes = {
  propertyData: PropTypes.object,
};

export default PropertyCard;
