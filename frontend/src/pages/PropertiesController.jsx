import { useEffect, useState } from "react";
import Container from "../components/Container";
import TableRowOfProperties from "../components/TableRowOfProperties";
import {
  useDeletePropertyByIdMutation,
  useGetAllPropertiesQuery,
} from "../redux/features/propertyApi";
import { toast } from "react-toastify";

const PropertiesController = () => {
  const { data, isLoading, refetch } = useGetAllPropertiesQuery();
  const [deletePropertyByIdMutation] = useDeletePropertyByIdMutation();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    if (data) {
      setProperties(data);
    }
  }, [data]);

  const deleteProperty = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete it?")) {
        const response = await deletePropertyByIdMutation(id).unwrap();
        refetch();
        setProperties(properties.filter((property) => property._id !== id));
        if (response.success) {
          toast.success("Property deleted successfully");
        }
      }
    } catch (error) {
      console.error("Failed to delete property: ", error);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <div className="overflow-auto h-[40rem] w-full bg-dark_trans_purple px-5 py-8 rounded-lg mb-20">
        <table className="w-[68rem]">
          <thead className="border-b-4 border-light_purple">
            <tr className="grid grid-cols-5 place-items-center">
              <th>Image</th>
              <th>Name</th>
              <th>ID</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {properties.length > 0 ? (
              properties.map((item) => (
                <TableRowOfProperties
                  key={item._id}
                  propertyData={item}
                  deleteProperty={deleteProperty}
                />
              ))
            ) : (
              <tr className="">
                <td className="text-center text-4xl col-span-4">
                  Property not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default PropertiesController;
