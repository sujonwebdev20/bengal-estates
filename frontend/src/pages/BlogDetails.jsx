import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { AiOutlineLike } from "react-icons/ai";
import { useGetBlogByIdQuery } from "../redux/features/BlogApi";
import LoadingSpinner from "../components/LoadingSpinner";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBlogByIdQuery(id);

  return (
    <>
      <section
        className={`mb-20 ${isLoading ? "h-[50vh] items-center" : null} flex justify-center w-full`}
      >
        <Container>
          {isLoading ? (
            <div className="w-full flex justify-center items-center">
              <LoadingSpinner />
            </div>
          ) : (
            <>
              <div className="">
                <img
                  className="w-full h-[23rem] object-cover mb-3 rounded-lg"
                  src={data.image}
                />
                <div className="flex justify-between items-center mb-7">
                  <small className="bg-inp_purple rounded-sm px-2">
                    {data.createdAt.slice(0, 10)}
                  </small>
                  {/* <small className="bg-inp_purple rounded-sm px-2 py-[0.1rem] flex items-center gap-1">
                  <AiOutlineLike className="text-lg" />
                  {data?.likes}
                </small> */}
                </div>
                <div className="mb-20">
                  <h1 className="text-4xl font-bold mb-7">{data?.title}</h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: data?.content }}
                  ></div>
                </div>
              </div>
            </>
          )}
        </Container>
      </section>
    </>
  );
};

export default BlogDetails;
