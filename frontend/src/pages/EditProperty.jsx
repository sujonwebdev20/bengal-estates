import { useState, useEffect } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import {
  useEditPropertyMutation,
  useGetPropertyByIdQuery,
} from "../redux/features/propertyApi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditProperty = () => {
  const { id } = useParams();
  const { data: propertyData } = useGetPropertyByIdQuery(id);
  const [propertyEditMutation, { isLoading }] = useEditPropertyMutation();
  const [newPropertyData, setNewPropertyData] = useState({
    name: "",
    thumbnail: "",
    images: [],
    price: "",
    propertyId: "",
    location: "",
    description: "",
    garages: "",
    propertySize: "",
    propertyType: "",
    yearBuilt: "",
    parking: "",
    garageSize: "",
    heating: "",
    bed: "",
    balcony: "",
    bath: "",
    features: [],
  });

  useEffect(() => {
    if (propertyData) {
      setNewPropertyData({
        name: propertyData.name || "",
        thumbnail: propertyData.thumbnail || "",
        images: propertyData.images || [],
        price: propertyData.price || "",
        propertyId: propertyData.propertyId || "",
        location: propertyData.location || "",
        description: propertyData.description || "",
        garages: propertyData.garages || "",
        propertySize: propertyData.propertySize || "",
        propertyType: propertyData.propertyType || "",
        yearBuilt: propertyData.yearBuilt || "",
        parking: propertyData.parking || "",
        garageSize: propertyData.garageSize || "",
        heating: propertyData.heating || "",
        bed: propertyData.bed || "",
        balcony: propertyData.balcony || "",
        bath: propertyData.bath || "",
        features: propertyData.features || [],
        isAvailable: propertyData.isAvailable || "",
      });
    }
  }, [propertyData]);

  const featuresDataHandler = (e) => {
    const featuresArray = e.target.value
      .split(",")
      .map((feature) => feature.trim());
    setNewPropertyData({
      ...newPropertyData,
      features: featuresArray,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", newPropertyData.name);
      newPropertyData.images.forEach((image) => {
        formData.append("images", image);
      });

      formData.append("thumbnail", newPropertyData.thumbnail);

      formData.append("price", newPropertyData.price);
      formData.append("propertyId", newPropertyData.propertyId);
      formData.append("location", newPropertyData.location);
      formData.append("description", newPropertyData.description);
      formData.append("garages", newPropertyData.garages);
      formData.append("propertySize", newPropertyData.propertySize);
      formData.append("propertyType", newPropertyData.propertyType);
      formData.append("yearBuilt", newPropertyData.yearBuilt);
      formData.append("parking", newPropertyData.parking);
      formData.append("garageSize", newPropertyData.garageSize);
      formData.append("heating", newPropertyData.heating);
      formData.append("bed", newPropertyData.bed);
      formData.append("balcony", newPropertyData.balcony);
      formData.append("bath", newPropertyData.bath);
      formData.append("features", JSON.stringify(newPropertyData.features));
      formData.append("isAvailable", newPropertyData.isAvailable);

      const response = await propertyEditMutation({
        id,
        data: formData,
      }).unwrap();

      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error uploading files", error);
    }
  };

  if (!propertyData) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <div className="w-full flex justify-center items-center mb-20">
        <div className="w-full bg-dark_trans_purple px-5 py-8 rounded-lg">
          <form className="font-inter text-md" onSubmit={submitHandler}>
            <div className="grid grid-cols-2 gap-3">
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="text"
                name="name"
                placeholder="Name"
                value={newPropertyData.name}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    name: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="number"
                name="price"
                placeholder="Price"
                value={newPropertyData.price}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    price: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="text"
                name="location"
                placeholder="Location"
                value={newPropertyData.location}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    location: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="text"
                name="propertyId"
                placeholder="ID"
                value={newPropertyData.propertyId}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    propertyId: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="text"
                name="isAvailable"
                placeholder="Available / Up Coming / Occupied"
                value={newPropertyData.isAvailable}
                required={true}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    isAvailable: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-3">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="thumbnail"
              >
                Select thumbnail
              </label>
              <input
                className="block w-full text-sm border border-light_purple rounded-lg cursor-pointer bg-medium_dark_purple "
                id="thumbnail"
                type="file"
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    thumbnail: e.target.files[0],
                  })
                }
              />
            </div>
            <div className="mt-3">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="multiple_files"
              >
                Upload multiple images
              </label>
              <input
                className="block w-full text-sm border border-light_purple rounded-lg cursor-pointer bg-medium_dark_purple "
                id="multiple_files"
                type="file"
                multiple
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    images: [...e.target.files],
                  })
                }
              />
            </div>

            <textarea
              className="w-full px-5 py-2 mt-3 rounded-lg bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300 resize-none"
              name="description"
              placeholder="Description"
              rows="5"
              value={newPropertyData.description}
              onChange={(e) =>
                setNewPropertyData({
                  ...newPropertyData,
                  description: e.target.value,
                })
              }
            ></textarea>
            <div className="grid grid-cols-5 max-lg:grid-cols-4 max-sm:grid-cols-2 gap-3">
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="number"
                name="propertySize"
                placeholder="Property Size"
                value={newPropertyData.propertySize}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    propertySize: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="text"
                name="propertyType"
                placeholder="Property Type"
                value={newPropertyData.propertyType}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    propertyType: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="number"
                name="yearBuilt"
                placeholder="Year Built"
                value={newPropertyData.yearBuilt}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    yearBuilt: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="number"
                name="parking"
                placeholder="Parking"
                value={newPropertyData.parking}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    parking: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="number"
                name="garageSize"
                placeholder="Garage Size"
                value={newPropertyData.garageSize}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    garageSize: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="text"
                name="heating"
                placeholder="Heating"
                value={newPropertyData.heating}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    heating: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="number"
                name="bed"
                placeholder="Bed"
                value={newPropertyData.bed}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    bed: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="number"
                name="balcony"
                placeholder="Balcony"
                value={newPropertyData.balcony}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    balcony: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="number"
                name="bath"
                placeholder="Bath"
                value={newPropertyData.bath}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    bath: e.target.value,
                  })
                }
              />
            </div>
            <textarea
              className="w-full px-5 py-2 mt-3 capitalize rounded-lg bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300 resize-none"
              name="features"
              placeholder="Features: e.g. Bed, Smart TV & TV Trolley"
              rows="5"
              value={newPropertyData.features.join(", ")}
              onChange={featuresDataHandler}
            ></textarea>
            <div className="grid place-items-center mt-5">
              <Button
                disabled={isLoading ? true : false}
                title={isLoading ? "updating..." : "update property"}
                width={"10rem"}
                height={"2.5rem"}
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default EditProperty;
