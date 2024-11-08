import Container from "../../components/shared/Container";
import PropertyCard from "../../components/PropertyCard";
import { useEffect, useState } from "react";
import { useGetAllPropertiesQuery } from "../../redux/features/propertyApi.js";
import UnavailableData from "../../components/UnavailableData.jsx";
import { IoSearchOutline } from "react-icons/io5";
import Pagination from "../../components/shared/Pagination.jsx";
import LoadingSpinner from "../../components/LoadingSpinner.jsx";

const Property = () => {
  const { data, isLoading } = useGetAllPropertiesQuery();
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
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
    setCurrentPage(1);
  };

  return (
    <Container>
      {Array.isArray(data) && (
        <div className="w-full flex justify-center items-center mb-3">
          <div className="w-[60%] max-sm:w-full h-[48px] relative flex items-center justify-center rounded-[1.875rem] overflow-hidden border-[.375rem] border-dark_trans_purple">
            <input
              onChange={searchHandler}
              className="w-full h-full px-10 bg-inp_purple focus:outline-none text-white font-inter font-extralight text-lg  placeholder:text-gray-300"
              type="text"
              value={searchValue}
              placeholder="Find the place you are looking for....."
            />
            <div className="bg-medium_dark_purple h-full absolute right-0 flex justify-center items-center rounded-[1.875rem] cursor-pointer">
              <IoSearchOutline className="w-12 h-8 text-light_purple" />
            </div>
          </div>
        </div>
      )}

      <section
        className={`mb-20 ${isLoading || !data ? "h-[50vh] items-center" : null} flex justify-center `}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="w-full mb-5 relative min-h-[calc(100vh-200px)]">
            {filteredData?.length > 0 ? (
              <Pagination
                data={filteredData}
                Element={PropertyCard}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                parPageItems={9}
                className={
                  "grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 my-5"
                }
              />
            ) : (
              <UnavailableData subject={"Properties"} />
            )}
          </div>
        )}
      </section>
    </Container>
  );
};

export default Property;
