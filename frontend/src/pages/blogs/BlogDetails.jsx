import { useParams } from "react-router-dom";
import { useGetBlogByIdQuery } from "../../redux/features/BlogApi";
import DetailContentsOfPage from "../../components/shared/DetailContentsOfPage";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBlogByIdQuery(id);

  return (
    <>
      <DetailContentsOfPage data={data?.data} isLoading={isLoading} />
    </>
  );
};

export default BlogDetails;
