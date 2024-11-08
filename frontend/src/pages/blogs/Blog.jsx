import Container from "../../components/shared/Container";
import BlogCard from "../../components/BlogCard";
import { useGetAllBlogsQuery } from "../../redux/features/BlogApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import UnavailableData from "../../components/UnavailableData";
import Pagination from "../../components/shared/Pagination";

const Blog = () => {
  const { data, isLoading } = useGetAllBlogsQuery();

  return (
    <>
      <Container>
        <section
          className={`mb-20 ${isLoading || !data ? "h-[50vh] items-center" : ""} flex justify-center`}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="w-full mb-5 relative min-h-[calc(100vh-200px)]">
              {data?.data?.length > 0 ? (
                <Pagination
                  data={data?.data && data.data}
                  Element={BlogCard}
                  className={
                    "grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 my-5"
                  }
                />
              ) : (
                <UnavailableData subject={"Blogs"} />
              )}
            </div>
          )}
        </section>
      </Container>
    </>
  );
};

export default Blog;
