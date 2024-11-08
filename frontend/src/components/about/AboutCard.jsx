import PropTypes from "prop-types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutCard = ({ contents }) => {
  const aboutCard = useRef();

  useGSAP(() => {
    gsap.fromTo(
      aboutCard.current,
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: aboutCard.current,
          // markers: true,
          start: "top 90%",
          end: "bottom 100%",
          scrub: 1,
        },
      }
    );
  });

  return (
    <div
      ref={aboutCard}
      className="w-full max-[712px]:w-full h-[26rem] max-[712px]:h-[20rem] bg-dark_trans_purple rounded-lg p-5 overflow-hidden"
    >
      <div className="w-full h-full relative">
        <h3 className="text-2xl max-lg:text-xl mb-6 font-lato">
          {contents.heading}
        </h3>
        <div className="scrollbar w-full h-[calc(100%-7rem)] pt-5 overflow-y-auto">
          <p className="font-inter font-light leading-6">
            {contents.paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

AboutCard.propTypes = {
  contents: PropTypes.object,
};

export default AboutCard;
