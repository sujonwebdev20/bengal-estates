import { useEffect, useState } from "react";
import { useGetAllFavoritesQuery } from "../redux/features/propertyApi";
import PropertyCard from "../components/PropertyCard";
import LoadingSpinner from "../components/LoadingSpinner";
import UnavailableData from "../components/UnavailableData";
import Container from "../components/Container";

const Favorite = () => {
  const { data, isLoading, refetch } = useGetAllFavoritesQuery();
  const [favoriteDataState, setFavoriteDataState] = useState();

  useEffect(() => {
    if (data) {
      setFavoriteDataState(data.favorites);
    }
    refetch();
  }, [data]);

  return (
    <Container>
      <section
        className={`mb-20 ${isLoading || !data ? "h-[50vh] items-center" : null} flex justify-center `}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : !data ? (
          <UnavailableData subject={"Properties"} />
        ) : (
          <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 my-5">
            {Array.isArray(favoriteDataState) &&
              favoriteDataState.map((item) => (
                <PropertyCard key={item._id} propertyData={item} />
              ))}
          </div>
        )}
      </section>
    </Container>
  );
};

export default Favorite;
