import Container from "../components/Container";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import TableRow from "../components/TableRow";
import CheckboxContent from "../components/CheckboxContent";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddToFavoriteByIdMutation,
  useGetPropertyByIdQuery,
} from "../redux/features/propertyApi";
import DetailsPageImageSlider from "../components/DetailsPageImageSlider";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SuggestedProperty from "../components/SuggestedProperty";
import LoadingSpinner from "../components/LoadingSpinner";
// import { FaBookmark } from "react-icons/fa6";

const PropertyDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPropertyByIdQuery(id);
  const [addToFavorite, { data: favoriteData }] =
    useAddToFavoriteByIdMutation();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  // let decodedToken = null;

  const addToFavoriteHandler = (id) => {
    if (!token) {
      return navigate("/signin");
    }
    addToFavorite(id);
  };

  useEffect(() => {
    if (favoriteData && favoriteData.success) {
      toast.success(favoriteData.message);
    } else if (favoriteData && !favoriteData.success) {
      toast.error(favoriteData.message);
    }
  }, [favoriteData]);

  return (
    <section
      className={`mb-20 ${isLoading ? "h-[50vh] items-center" : null} flex justify-center w-full`}
    >
      <Container>
        {isLoading ? (
          <div className="w-full flex justify-center items-center">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <div className="w-full flex max-sm:flex-wrap gap-5 mb-16">
              <div className="details_page_slider w-2/3 h-[20rem] max-sm:w-full rounded-lg overflow-hidden">
                <DetailsPageImageSlider
                  images={data.images}
                  thumbnail={data.thumbnail}
                />
              </div>
              <div className="w-1/2 h-[20rem] max-sm:w-full rounded-lg bg-dark_trans_purple">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="font-lato text-2xl max-lg:text-xl font-bold">
                      ${data?.price}
                    </h3>
                    <FaRegBookmark
                      className="text-2xl text-light_purple cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => addToFavoriteHandler(id)}
                    />
                  </div>
                  <div className="flex justify-between mb-5 font-inter font-bold uppercase">
                    <div className="flex items-center gap-2">
                      <IoBed className="text-3xl text-light_purple" />
                      <span className="text-lg max-[320px]:text-md">
                        {data?.bed}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaBath className="text-2xl text-light_purple" />
                      <span className="text-lg max-lg:text-md">
                        {data?.bath}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdOutlineZoomOutMap className="text-2xl text-light_purple" />
                      <span className="text-lg max-lg:text-md">
                        {data?.propertySize} sqft
                      </span>
                    </div>
                  </div>
                  <h3 className="font-lato text-2xl font-bold mb-5 max-lg:mb-3">
                    {data?.name}
                  </h3>
                  <p className={`font-inter text-lg mb-5 max-lg:text-sm`}>
                    {data?.location}
                  </p>
                  <p className={`font-inter text-xl mb-5 max-lg:text-sm`}>
                    Email: &nbsp;
                    <span className="text-light_purple text-bold inline-block font-semibold">
                      aloman@greenabodeprop.com
                    </span>
                  </p>
                  <p className="text-right text-lg max-lg:text-sm font-inter">
                    Property ID: &nbsp;
                    <span className="inline-block max-lg:text-sm font-semibold">
                      {data.propertyId}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-lato font-bold mb-3">Details</h3>
            <div className="bg-dark_trans_purple p-6  mb-20 rounded-lg">
              <table className="flex w-full gap-9 max-sm:flex-wrap  text-sm text-gray-500">
                <tbody className="w-full grid grid-cols-2 max-sm:grid-cols-1 gap-2 font-lato font-medium text-base [&>tr:last-child]:border-none">
                  <TableRow
                    propertyKey="Type"
                    propertyValue={data?.propertyType}
                  />
                  <TableRow
                    propertyKey="Year built"
                    propertyValue={data?.yearBuilt}
                  />
                  <TableRow
                    propertyKey="Parking"
                    propertyValue={data?.parking}
                  />
                  <TableRow
                    propertyKey="Garage Size"
                    propertyValue={`${data?.garageSize} SQFT`}
                  />
                  <TableRow
                    propertyKey="Heating"
                    propertyValue={data?.heating}
                  />
                  <TableRow propertyKey="Bed" propertyValue={data?.bed} />
                  <TableRow
                    propertyKey="Num Of Balcony"
                    propertyValue={data?.balcony}
                  />
                  <TableRow propertyKey="Bath" propertyValue={data?.bath} />
                </tbody>
              </table>
            </div>
            <h3 className="text-xl font-lato font-bold mb-3">Features</h3>
            <div className="bg-dark_trans_purple p-6  mb-20 rounded-lg grid place-items-center">
              <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-y-3 gap-x-9">
                {data?.features?.map((item, index) => (
                  <CheckboxContent key={index} featuresName={item} />
                ))}
              </div>
            </div>
            <h3 className="text-xl font-lato font-bold mb-3">Description</h3>
            <div className="bg-dark_trans_purple p-6  mb-20 rounded-lg grid place-items-center">
              <textarea
                disabled
                cols={10}
                rows={10}
                value={data?.description}
                className="bg-transparent w-full outline-none resize-none font-inter text-gray-300"
              ></textarea>
            </div>
            <SuggestedProperty />
          </>
        )}
      </Container>
    </section>
  );
};

export default PropertyDetails;
