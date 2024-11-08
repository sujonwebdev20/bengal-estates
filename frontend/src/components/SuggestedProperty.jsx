import { useGetSuggestedPropertiesQuery } from "../redux/features/propertyApi";
import PropertyCard from "./PropertyCard";
import LoadingSpinner from "./LoadingSpinner";
import Container from "./shared/Container";

const SuggestedProperty = () => {
  const { data, isLoading } = useGetSuggestedPropertiesQuery();

  return (
    <Container>
      <section
        className={`mb-20 ${isLoading ? "h-[50vh] items-center" : "flex justify-center"}`}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="w-full">
            {data?.data?.length > 0 && (
              <>
                <h3 className="text-xl font-lato font-bold mb-3">
                  Similar Suggested
                </h3>
                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 my-5">
                  {data?.data?.map((item) => (
                    <PropertyCard key={item?._id} dataItems={item} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </section>
    </Container>
  );
};

export default SuggestedProperty;
