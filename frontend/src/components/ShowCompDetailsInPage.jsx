import { useRef, useEffect } from "react";
import Container from "./shared/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ShowCompDetailsInPage = ({ pageData }) => {
  const animRefs = useRef([]);
  animRefs.current = [];

  useEffect(() => {
    animRefs.current.forEach((anim) => {
      gsap.fromTo(
        anim,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: anim,
            // markers: true,
            start: "top 100%",
            end: "top 75%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !animRefs.current.includes(el)) {
      animRefs.current.push(el);
    }
  };

  return (
    <Container>
      {pageData.map((item) => (
        <div key={item.id} ref={addToRefs}>
          <div className="mb-20">
            <h2 className="mb-3 text-center text-3xl">{item.title}</h2>
            <p className="bg-dark_trans_purple rounded-md text-base leading-relaxed px-4 py-3">
              {item.description}
            </p>
            {item.example ? (
              <p className="bg-dark_trans_purple rounded-md text-base leading-relaxed px-4 py-3 mt-3">
                {item.example}
              </p>
            ) : null}
            {item.highlights ? (
              <ul className="list-disc [&_li_small]:text-[#ffffffc7] mt-6">
                {item.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="ml-8 pl-2 py-1 font-inter text-base list-disc"
                  >
                    {highlight.headText ? (
                      <span className="text-md font-bold pr-2">
                        {highlight.headText}
                      </span>
                    ) : null}
                    <small className="text-sm">{highlight.text}</small>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default ShowCompDetailsInPage;
