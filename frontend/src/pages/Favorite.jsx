import { useGetAllFavoritesQuery } from "../redux/features/propertyApi";
import PropertyCard from "../components/PropertyCard";
import LoadingSpinner from "../components/LoadingSpinner";
import UnavailableData from "../components/UnavailableData";
import Container from "../components/shared/Container";

const Favorite = () => {
  const { data, isLoading } = useGetAllFavoritesQuery();

  return (
    <Container>
      <section
        className={`mb-20 ${isLoading || !data ? "h-[50vh] items-center" : null} flex justify-center `}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : data?.data < 1 ? (
          <UnavailableData subject={"Favorite Properties"} />
        ) : (
          <div className="w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 my-5">
            {data?.data?.map((item) => (
              <PropertyCard key={item?._id} dataItems={item} />
            ))}
          </div>
        )}
      </section>
    </Container>
  );
};

export default Favorite;
