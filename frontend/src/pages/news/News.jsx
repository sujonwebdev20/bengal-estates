import Container from "../../components/shared/Container";
import { useGetAllNewsQuery } from "../../redux/features/newsApi";
import NewsListItems from "../../components/NewsListItems";
import Pagination from "../../components/shared/Pagination";
import UnavailableData from "../../components/UnavailableData";
import LoadingSpinner from "../../components/LoadingSpinner";

const News = () => {
  const { data, isLoading } = useGetAllNewsQuery();

  return (
    <Container>
      <div
        className={`mb-20 ${isLoading || !data ? "h-[50vh] items-center" : null} flex md:justify-center`}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {data?.data?.length > 0 ? (
              <div className="xl:grid grid-cols-12 gap-7 mb-5 relative min-h-[calc(100vh-200px)]">
                <h1 className="xl:w-full md:w-2/3 max-xl:mx-auto md:text-5xl text-4xl col-start-1 md:col-span-4 md:leading-tight max-xl:text-center text-purple-50 leading-snug tracking-tight max-md:mb-5">
                  Bengal Estates News Releases and Company Statements
                </h1>
                <div className="col-start-6 md:col-span-8">
                  <Pagination
                    data={data?.data && data.data}
                    Element={NewsListItems}
                  />
                </div>
              </div>
            ) : (
              <UnavailableData subject={"News"} />
            )}
          </>
        )}
      </div>
    </Container>
  );
};

export default News;
