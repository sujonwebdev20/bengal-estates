import PropTypes from "prop-types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export const RectangleCard = ({ paragraph }) => {
  return (
    <p className="bg-medium_dark_purple px-9 text-center py-3 rounded-lg">
      {paragraph}
    </p>
  );
};
export const RectangleCardWrapper = ({ children }) => {
  return (
    <div className="w-1/2 max-sm:w-full flex flex-col max-sm:flex-wrap gap-4">
      {children}
    </div>
  );
};

export const RectangleAllCardWrapper = ({ children }) => {
  const tl = gsap.timeline();
  const rectangleAllCardWrapper = useRef();

  useGSAP(() => {
    tl.fromTo(
      rectangleAllCardWrapper.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: rectangleAllCardWrapper.current,
          start: "top 95%",
          end: "bottom 100%",
          scrub: 2,
        },
      }
    );
  });
  return (
    <div
      ref={rectangleAllCardWrapper}
      className="rectangleAllCardWrapper flex gap-5 max-sm:flex-col mb-20 overflow-hidden"
    >
      {children}
    </div>
  );
};

export const BigRectangleCard = ({ header, paragraph }) => {
  const bigRectangleCard = useRef();

  useGSAP(() => {
    gsap.fromTo(
      bigRectangleCard.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: bigRectangleCard.current,
          start: "top 95%",
          end: "bottom 100%",
          scrub: 2,
        },
      }
    );
  });

  return (
    <div
      ref={bigRectangleCard}
      className="w-full bg-medium_dark_purple max-sm:flex-grow px-9 py-9 rounded-lg"
    >
      <h3 className="font-lato text-4xl mb-6">{header}</h3>
      <p className="font-inter text-base">{paragraph}</p>
    </div>
  );
};

RectangleCard.propTypes = {
  paragraph: PropTypes.string.isRequired,
};
RectangleCardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
RectangleAllCardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
BigRectangleCard.propTypes = {
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};
