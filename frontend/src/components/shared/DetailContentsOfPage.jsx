import Container from "../../components/shared/Container";
// import { AiOutlineLike } from "react-icons/ai";
import LoadingSpinner from "../../components/LoadingSpinner";
import PropTypes from "prop-types";
import ShowDate from "./ShowDate";

const DetailContentsOfPage = ({ data, isLoading }) => {
  console.log(typeof data?.createdAt === "string");

  return (
    <>
      <main
        className={`mb-20 ${isLoading ? "h-[50vh] items-center" : null} flex justify-center w-full`}
      >
        <Container>
          {isLoading ? (
            <div className="w-full flex justify-center items-center min-h-screen">
              <LoadingSpinner />
            </div>
          ) : (
            <>
              <div className="min-h-screen">
                <img
                  className="w-full h-[23rem] object-cover mb-3 rounded-lg"
                  src={data.image}
                />
                <div className="flex justify-between items-center mb-7">
                  <ShowDate date={data?.createdAt} />
                  {/* <small className="bg-inp_purple rounded-sm px-2 py-[0.1rem] flex items-center gap-1">
                  <AiOutlineLike className="text-lg" />
                  {data?.likes}
                </small> */}
                </div>
                <div className="mb-20">
                  <h1 className="text-4xl font-bold mb-7">{data?.title}</h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: data?.content }}
                  ></div>
                </div>
              </div>
            </>
          )}
        </Container>
      </main>
    </>
  );
};

DetailContentsOfPage.propTypes = {
  data: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
DetailContentsOfPage.defaultProps = {
  data: {},
  isLoading: true,
};

export default DetailContentsOfPage;
