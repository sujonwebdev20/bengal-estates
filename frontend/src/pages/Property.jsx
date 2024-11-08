import Container from "../components/Container";
import PropertyCard from "../components/PropertyCard";
import { useEffect, useState } from "react";
import { useGetAllPropertiesQuery } from "../redux/features/propertyApi.js";
import PropertyPagination from "../components/PropertyPagination.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import UnavailableData from "../components/UnavailableData.jsx";
import { IoSearchOutline } from "react-icons/io5";

const Property = () => {
  const { data, isLoading, refetch } = useGetAllPropertiesQuery();
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    refetch();
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const searchHandler = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);

    const filteredArr = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(value) ||
        item.location.toLowerCase().includes(value) ||
        item.propertyId.toLowerCase().includes(value) ||
        item.price.toFixed().includes(value)
      );
    });

    setFilteredData(filteredArr);
  };

  const showPerPage = 9;
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const pageHandler = (start, end) => {
    setPagination({ start, end });
  };

  return (
    <Container>
      {filteredData.length > 0 && Array.isArray(data) && (
        <div className="w-[60%] max-sm:w-full h-[3rem] flex items-center rounded-[30px] my-4 relative overflow-hidden">
          <input
            onChange={searchHandler}
            className="w-full h-full px-10 border-[6px] border-dark_trans_purple bg-inp_purple outline-none text-white font-inter font-extralight text-lg rounded-[30px] placeholder:text-gray-300"
            type="text"
            value={searchValue}
            placeholder="Find the place you are looking for....."
          />
          <div className="bg-medium_dark_purple absolute right-[.5rem] flex justify-center items-center rounded-[30px] cursor-pointer">
            <IoSearchOutline className="w-12 h-8 text-light_purple" />
          </div>
        </div>
      )}
      <section
        className={`mb-20 ${isLoading || !data ? "h-[50vh] items-center" : null} flex justify-center `}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
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
        )}
      </section>
      {filteredData.length > 0 && (
        <PropertyPagination
          showPerPage={showPerPage}
          pageHandler={pageHandler}
        />
      )}
    </Container>
  );
};

export default Property;
