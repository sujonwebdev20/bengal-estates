// import { AiOutlineLike } from "react-icons/ai";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const BlogCard = ({ blogData }) => {
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
      <Link to={`/blog/${blogData._id}`}>
        <div className="w-full h-[18rem] bg-dark_trans_purple border-2 border-dark_purple rounded-lg hover:border-light_purple hover:scale-105 transition-all overflow-hidden">
          <img
            className="w-full h-[60%] object-cover"
            src={blogData.image}
            alt="House"
          />

          <div className="m-4 text-md">
            <h3 className="text-xl mb-3">
              {blogData?.title?.length > 50
                ? blogData?.title.slice(0, 50) + "..."
                : blogData?.title}
            </h3>

            <div className="w-full flex justify-between items-center absolute left-0 bottom-2 ">
              <small className="bg-inp_purple rounded-sm px-2 ml-4">
                {blogData.createdAt.slice(0, 10)}
              </small>
              {/* <small className="bg-inp_purple rounded-sm px-2 py-[0.1rem] flex items-center gap-1 mr-4">
                <AiOutlineLike className="text-lg" />
                {blogData.likes}
              </small> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
BlogCard.propTypes = {
  blogData: PropTypes.object.isRequired,
};

export default BlogCard;
