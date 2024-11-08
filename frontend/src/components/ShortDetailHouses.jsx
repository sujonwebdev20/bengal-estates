import Container from "./shared/Container";
import PropTypes from "prop-types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ShortDetailHouses = ({ contents }) => {
  const imgAnim = useRef();
  const txtAnim = useRef();

  useGSAP(() => {
    gsap.fromTo(
      imgAnim.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: imgAnim.current,
          start: "top 95%",
          end: "bottom 100%",
          scrub: 2,
        },
      }
    );
  });

  return (
    <Container>
      <section
        ref={imgAnim}
        style={{ flexDirection: contents?.direction || "" }}
        className="lg:flex lg:justify-between lg:items-center lg:gap-10 max-lg:gap-y-8 w-full mb-20 overflow-hidden"
      >
        <div className="short_details_img w-1/2 max-lg:w-full h-[23rem] max-lg:h-[40vw] max-lg:mb-4">
          <img
            className="w-full h-full object-cover rounded-[20px] opacity-80"
            src={contents.image}
            alt="House"
          />
        </div>
        <div
          ref={txtAnim}
          className="short_details_txt w-1/2 max-lg:w-full flex flex-col"
        >
          <h2
            style={{ lineHeight: 1.2 }}
            className="font-lato lg:text-5xl mb-7 max-lg:text-center max-lg:text-3xl capitalize"
          >
            {contents?.heading}
          </h2>
          <p className="font-inter text-lg max-lg:text-md leading-7 text-[#dadada] lg:text-start max-lg:text-center">
            {contents?.paragraph}
          </p>
        </div>
      </section>
    </Container>
  );
};

ShortDetailHouses.propTypes = {
  contents: PropTypes.object,
};

export default ShortDetailHouses;
