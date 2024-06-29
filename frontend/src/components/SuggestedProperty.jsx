import { useEffect, useState } from "react";
import { useGetAllPropertiesQuery } from "../redux/features/propertyApi";
import PropertyCard from "./PropertyCard";
import LoadingSpinner from "./LoadingSpinner";
import Container from "./Container";

const SuggestedProperty = () => {
  const { data, isLoading, refetch } = useGetAllPropertiesQuery();
  const [suggestPropertyState, setSuggestPropertyState] = useState([]);

  useEffect(() => {
    refetch();
    if (data) {
      setSuggestPropertyState(data);
    }
  }, [data]);

  return (
    <Container>
      <section
        className={`mb-20 ${isLoading ? "h-[50vh] items-center" : "flex justify-center"}`}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="w-full">
            {suggestPropertyState.length > 0 && (
              <>
                <h3 className="text-xl font-lato font-bold mb-3">
                  Similar Suggested
                </h3>
                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 my-5">
                  {suggestPropertyState.slice(0, 3).map((item) => (
                    <PropertyCard key={item._id} propertyData={item} />
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
