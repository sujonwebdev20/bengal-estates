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
          className={`mb-20 ${isLoading || !data ? "h-[50vh] items-center" : null} flex justify-center`}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="w-full">
              {data.length > 0 ? (
                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 my-5">
                  {data.slice(pagination.start, pagination.end).map((item) => (
                    <BlogCard key={item._id} blogData={item} />
                  ))}
                </div>
              ) : (
                <UnavailableData subject={"Blogs"} />
              )}
            </div>
          )}
        </section>
        {/* (
        <div className="w-full">
          {filteredData.length > 0 ? (
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 my-5">
              {filteredData
                .slice(pagination.start, pagination.end)
                .map((item) => (
                  <PropertyCard key={item._id} propertyData={item} />
                ))}
            </div>
          ) : (
            <UnavailableData subject={"Properties"} />
          )}
        </div>
        ) */}
        <BlogPagination showPerPage={showPerPage} pageHandler={pageHandler} />
      </Container>
    </>
  );
};

export default Blog;
