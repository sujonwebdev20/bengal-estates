// import { AiOutlineLike } from "react-icons/ai";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ShowDate from "./shared/ShowDate";

const BlogCard = ({ dataItems }) => {
  const blogCardAnim = useRef();
  useGSAP(() => {
    gsap.fromTo(
      blogCardAnim.current,
      { scale: 0.5 },
      {
        scale: 1,
        duration: 0.5,
        stagger: 1,
      }
    );
  });

  return (
    <div ref={blogCardAnim} className="blogCardAnim relative">
      <Link to={`/blogs/${dataItems?._id}`}>
        <div className="w-full h-[18rem] flex flex-col bg-dark_trans_purple border-2 border-dark_purple rounded-lg hover:border-light_purple hover:scale-105 transition-all overflow-hidden">
          <img
            className="w-full h-[60%] object-cover"
            src={dataItems?.image}
            alt="House"
          />

          <div className="m-4 text-md flex-grow">
            <h3 className="text-xl mb-3">
              {dataItems?.title?.length > 30
                ? dataItems?.title.slice(0, 30) + "..."
                : dataItems?.title}
            </h3>

            <div className="w-full flex justify-end gap-2 mt-7 ">
              <ShowDate date={dataItems?.createdAt} className="" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
BlogCard.propTypes = {
  dataItems: PropTypes.object.isRequired,
};

export default BlogCard;
