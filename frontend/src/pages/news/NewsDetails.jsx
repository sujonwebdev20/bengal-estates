import { useGetNewsByIdQuery } from "../../redux/features/newsApi";
import { useParams } from "react-router-dom";
import DetailContentsOfPage from "../../components/shared/DetailContentsOfPage";

const NewsDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetNewsByIdQuery(id);

  return (
    <>
      <DetailContentsOfPage data={data?.data} isLoading={isLoading} />
    </>
  );
};

export default NewsDetails;
