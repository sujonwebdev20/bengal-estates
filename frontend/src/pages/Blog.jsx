import Container from "../components/Container";
import BlogCard from "../components/BlogCard";
import { useGetAllBlogsQuery } from "../redux/features/BlogApi";
import { useEffect, useState } from "react";
import BlogPagination from "../components/BlogPagination";
import LoadingSpinner from "../components/LoadingSpinner";
import UnavailableData from "../components/UnavailableData";

const Blog = () => {
  const { data, isLoading, refetch } = useGetAllBlogsQuery();

  useEffect(() => {
    refetch();
  }, []);

  const showPerPage = 9;
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const pageHandler = (start, end) => {
    setPagination({ start, end });
  };

  return (
    <>
      <Container>
        <section
          className={`mb-20 ${isLoading || !data ? "h-[50vh] items-center" : null} flex justify-center `}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : !data ? (
            <UnavailableData subject={"Blogs"} />
          ) : (
            <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 place-items-center gap-5">
              {Array.isArray(data) &&
                data
                  .slice(pagination.start, pagination.end)
                  .map((item) => <BlogCard key={item._id} blogData={item} />)}
            </div>
          )}
        </section>
        <BlogPagination showPerPage={showPerPage} pageHandler={pageHandler} />
      </Container>
    </>
  );
};

export default Blog;
